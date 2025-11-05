import { google, docs_v1 as docsV1 } from 'googleapis';
import { uuid as uuidv4 } from 'uuidv4';

// eslint-disable-next-line max-len
const checkForHighlight = (x: any) => x?.textRun?.textStyle?.backgroundColor?.color?.rgbColor?.red === 1
	&& x?.textRun?.textStyle?.backgroundColor?.color?.rgbColor?.green === 1;

const filterNewLines = (x: any) => {
  const regex = /^[.\n]{0,2}$|^\s*$|^\\n$|^[.\n]$/;
  return !regex.test(x?.textRun?.content);
};

const findElements = (googleDocBody: docsV1.Schema$Document['body']) => {
  if (!googleDocBody) return [];
  const result: any[] = [];

  const parseJson = (doc: any) => {
    if (doc instanceof Array) {
      doc.forEach((item) => {
        parseJson(item);
      });
    } else if (typeof doc === 'object') {
      Object.keys(doc).forEach((key) => {
        if (key === 'paragraph') {
          result.push(doc[key]);
        } else {
          parseJson(doc[key]);
        }
      });
    }
  };
  parseJson(googleDocBody.content);

  // combine all the elements into one array and return it
  return result.flat();
};

export const GetHighlightedElements = async (cvContent: any) => {
  const doc: docsV1.Schema$Document = cvContent;
  const paragraphs = findElements(doc.body);

  const extractedText = paragraphs.map((p) => p.elements.reduce((acc: any, curr: any) => {
    if (curr.textRun) {
      if (checkForHighlight(curr)) {
        return [...acc, curr.textRun.content];
      }
    }
    return acc;
  }, [] as any[]).join(' ').trim().replace(/\n/g, '')).filter((x) => x.length > 0);

  return extractedText;
};
