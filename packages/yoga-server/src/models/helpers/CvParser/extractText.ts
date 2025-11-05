import { docs_v1 as docsV1 } from 'googleapis';

const findElements = (jsonDoc: any) => {
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

  // Assuming `jsonDoc` is your JSON document
  parseJson(jsonDoc);
  // combine all the elements into one array and return it
  return result.flat();
};

export const findText = (jsonDoc: docsV1.Schema$Document) => {
  if (!jsonDoc.body) return [];
  const paragraphs = findElements(jsonDoc.body.content);

  const elements: string[] = paragraphs.map((p) => p.elements.reduce((acc: any, curr: any) => {
    if (curr.textRun) {
      return [...acc, curr.textRun.content];
    }
    return acc;
  }, [] as any[]).join(' ').trim().replace(/\n/g, '')).filter((x) => x.length > 0);

  return elements;
};
