/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
import { docs_v1 as docsV1 } from 'googleapis';
import { batch } from 'googleapis/build/src/apis/batch';
import { TextRun } from './types';

/**
 * Parses the documents structural elements.
 * Returning (currently) only a textRun array.
 */
export function ParseStructuralElements(
  elements: Array<docsV1.Schema$StructuralElement>,
): Array<TextRun> {
  const parsedElements: Array<TextRun> = [];

  for (let i = 0; i < elements.length; i++) {
    const e = elements[i];
    const path = `${i}`;

    if (e.paragraph == null || e.paragraph.elements == null) continue;

    for (let j = 0; j < e.paragraph.elements.length; j++) {
      const content = e.paragraph.elements[j];

      if (!content.textRun) continue;

      const textRun = parseTextRun(
        content.textRun,
        `${path}.paragraph.elements.${j}`,
      );
      if (!textRun) continue;

      parsedElements.push(textRun);
    }
  }

  return parsedElements;
}

/**
 * Parses the "textRun" object, which contains the text, text styling and type.
 *
 * It can return undefined if the `content` (text) is undefined.
 */
function parseTextRun(
  textRun: docsV1.Schema$TextRun,
  jsonPath: string,
): TextRun | undefined {
  if (!textRun.content) return undefined;

  const run: TextRun = {
    Content: textRun.content,
    JsonPath: jsonPath,
  };

  if (textRun.textStyle?.bold) run.Bold = true;
  if (textRun.textStyle?.italic) run.Italics = true;
  if (textRun.textStyle?.underline) run.Underline = true;

  return run;
}

export function CreateUpdateRequests(
  shift: number,
  paragraphElement: docsV1.Schema$ParagraphElement,
  textToInsert: string,
): [number, docsV1.Schema$Request[]] {
  if (
    paragraphElement.startIndex == null ||
    paragraphElement.endIndex == null
  ) {
    throw new Error('No start or end index found');
  }

  const batchUpdate: docsV1.Schema$Request[] = [];
  batchUpdate.push({
    insertText: {
      location: {
        index: paragraphElement.endIndex,
      },
      text: '.',
    },
  });

  // delete the other text in the paragraph.
  batchUpdate.push({
    deleteContentRange: {
      range: {
        startIndex: paragraphElement.startIndex + shift,
        endIndex: paragraphElement.endIndex + shift,
      },
    },
  });

  batchUpdate.push({
    insertText: {
      location: {
        index: paragraphElement.startIndex + shift,
      },
      text: textToInsert,
    },
  });

  batchUpdate.push({
    deleteContentRange: {
      range: {
        startIndex: paragraphElement.startIndex + textToInsert.length + shift,
        endIndex: paragraphElement.startIndex + textToInsert.length + 1 + shift,
      },
    },
  });

  const newShift =
    shift +
    textToInsert.length -
    (paragraphElement.endIndex - paragraphElement.startIndex);

  return [newShift, batchUpdate];
}

/**
 * Function mutates json in place.
 * HTML string -> batch requests
 */
export function ApplyChanges(
  json: docsV1.Schema$Body,
  changes: Array<TextRun>,
): [docsV1.Schema$Body, docsV1.Schema$Request[]] {
  if (!json.content) {
    throw new Error('Where tf is the content?');
  }

  const batchUpdate: docsV1.Schema$Request[] = [];
  let shift = 0;

  for (const change of changes) {
    const paths = change.JsonPath.split('.');

    let target: object = json.content;
    for (const p of paths) {
      // stfu typescript.
      // @ts-ignore
      target = target[p];
    }
    const paragraphElement = target as docsV1.Schema$ParagraphElement;

    if (
      paragraphElement.startIndex == null ||
      paragraphElement.endIndex == null
    ) {
      throw new Error('No start or end index found');
    }
    const [newShift, newBatchUpdate] = CreateUpdateRequests(
      shift,
      paragraphElement,
      change.Content,
    );

    batchUpdate.push(...newBatchUpdate);

    shift = newShift;

    // @ts-ignore
    const textRun = target.textRun as docsV1.Schema$TextRun;
    textRun.content = change.Content;
  }

  return [json, batchUpdate];
}

export function TextRunsToHtml(runs: Array<TextRun>): string {
  let html = '';

  for (let i = 0; i < runs.length; i++) {
    const r = runs[i];
    const splitText = r.Content.split('\n');

    // No new line characters.
    if (splitText.length === 1) {
      html += `<p id="${i}">${splitText[0]}</p>`;
      continue;
    }

    // At least 1 new line.

    html += `<p id="${i}">`;
    for (let j = 0; j < splitText.length; j++) {
      const text = splitText[j];

      if (text.length === 0) {
        html += '<br/>';
        continue;
      }

      html += `${text}<br/>`;
    }
    html = html.substring(0, html.length - '<br/>'.length);
    html += '</p>';
  }

  return html;
}

const startParagraphRegex = /<p[^>]*>/i;
const idRegex = /(?<=")(.*)(?=")/i;
const endParagraphRegex = /<\/p>/i;

/**
 * Given an HTML <p>, extract the ID and the content inside.
 * <p id="0">HEllo<br/></p> ---> [0, "HEllo<br/>"]
 */
export function ExtractInfo(paragraph: string): [string, string] {
  const startPMatch = startParagraphRegex.exec(paragraph);
  const endPMatch = endParagraphRegex.exec(paragraph);

  if (startPMatch == null) {
    throw new Error('Should always match the initial of a paragraph (<p>)');
  }

  if (endPMatch == null) {
    throw new Error('Should always match the end of a paragraph (</p>)');
  }

  const idMatch = startPMatch[0].match(idRegex);
  if (idMatch == null) {
    throw new Error('Should always extract an ID');
  }

  const id = idMatch[0];
  if (id.length === 0) {
    throw new Error('ID should be prevent, found an empty ID tag');
  }

  const content = paragraph
    .slice(startPMatch.index + startPMatch[0].length, endPMatch.index)
    .replaceAll('<br/>', '\n');

  return [id, content];
}

/**
 * Mutates the `runs` array as to apply the changes the HTML string provides.
 */
export function HtmlToRuns(runs: Array<TextRun>, html: string): Array<TextRun> {
  const paragraphs = html
    .split('</p>')
    .filter((p) => p.length > 0)
    .map((p) => `${p}</p>`);

  for (const p of paragraphs) {
    const [id, content] = ExtractInfo(p);

    runs[Number(id)].Content = content;
  }

  return runs;
}

export async function ImproveCV(
  cv: docsV1.Schema$Body,
  prompt: string,
): Promise<docsV1.Schema$Body> {
  const parsed = ParseStructuralElements(cv.content!);
  const html = TextRunsToHtml(parsed);

  // TODO: Change this to the actual call.
  const improvedHtml = await (
    await fetch('call AI', { body: JSON.stringify({ prompt, html }) })
  ).text();

  const newRuns = HtmlToRuns(parsed, improvedHtml);
  const [jsonCV, updateRequests] = ApplyChanges(cv, newRuns);

  // TODO call the google api to modify the document.

  return jsonCV;
}
