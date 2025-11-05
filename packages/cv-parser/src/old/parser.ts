/* eslint-disable no-param-reassign */
import { uuid as uuidv4 } from 'uuidv4';
import { docs_v1 as docsV1 } from 'googleapis';
import { matchCriteria, matchesCriteria } from 'old/GoogleDocReinserter/misc';

/**
 * Parses the text run from the google doc and returns a html string with
 * the appropriate tags
 */
export const parseTextRun = (textRun: docsV1.Schema$TextRun) => {
  let start = '';
  let end = '';
  if (!textRun.textStyle) return textRun.content;

  if (textRun?.textStyle?.link) {
    start += `<a href="${textRun.textStyle.link.url}">`;
    end += '</a>';
  }
  if (textRun?.textStyle?.bold) {
    start += '<b>';
    end += '</b>';
  }

  return `${start}${textRun.content}${end}`;
};

/**
 * The rosetta stone for the google doc paragraph styles
 */
export const paragraphStyleMap = {
  TITLE: 'h1',
  HEADING_1: 'h2',
  HEADING_2: 'h3',
  HEADING_3: 'h4',
  NORMAL_TEXT: 'p',
};

export type ParagraphStyle = keyof typeof paragraphStyleMap;

export const parseParagraph = (paragraph: docsV1.Schema$Paragraph) => {
  if (!paragraph.elements) return null;

  const children = paragraph.elements
    .reduce((acc, curr) => {
      if (!curr.textRun) return acc;

      if (!matchesCriteria(matchCriteria, curr)) {
        return acc;
      }
      const returned = parseTextRun(curr.textRun);
      if (returned) {
        return acc.concat(returned);
      }
      return acc;
    }, '')
    .trim()
    .replace(/\n/g, '');

  if (
    children.length === 0 ||
    typeof paragraph?.paragraphStyle?.namedStyleType !== 'string'
  )
    return null;

  // check if the paragraph style is valid as ParagraphStyle
  if (
    !Object.keys(paragraphStyleMap).includes(
      paragraph.paragraphStyle.namedStyleType,
    )
  ) {
    return null;
  }

  const tag =
    paragraphStyleMap[
      paragraph.paragraphStyle.namedStyleType as ParagraphStyle
    ];

  if (tag) {
    return `<${tag}>${children}</${tag}>`;
  }
  throw new Error(
    `Unknown paragraph style: ${paragraph.paragraphStyle?.namedStyleType}`,
  );
};

export const processTypes = {
  paragraph: 'paragraph',
  table: 'table',
};

export type ProcessType = keyof typeof processTypes;

export const parseJson: any = (doc: any) => {
  if (doc instanceof Array) {
    return doc.reduce((acc, curr) => {
      const returned = parseJson(curr);
      if (returned) {
        return acc.concat(returned);
      }
      return acc;
    }, []);
  }
  if (typeof doc === 'object') {
    return Object.keys(doc).reduce((acc, curr) => {
      let r = null;
      if (curr === processTypes.paragraph) {
        r = parseParagraph(doc[curr]);
      } else {
        r = parseJson(doc[curr]);
      }

      if (r) {
        return acc.concat(r);
      }
      return acc;
    }, []);
  }
  return null;
};
