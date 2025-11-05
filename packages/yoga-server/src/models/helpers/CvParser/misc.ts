import { docs_v1 as docsV1 } from 'googleapis';

import { JSDOM } from 'jsdom';

// TODO: this needs a big refactor

export type IndexEntry = {
	startIndex: number;
	endIndex: number;
	content: docsV1.Schema$ParagraphElement[] | string[];
	paragraphStyle: docsV1.Schema$ParagraphStyle;
};

export type IndexList = IndexEntry[];

export const matchCriteria: docsV1.Schema$TextStyle = {
  backgroundColor: {
    color: {
      rgbColor: {
        red: 1,
        green: 1,
      },
    },
  },
};

/**
 * Check if a given element matches the criteria
 * @param criteria the matching criteria
 * @param element the element to check
 */
export const matchesCriteria = (
  criteria: docsV1.Schema$TextStyle,
  element: docsV1.Schema$ParagraphElement,
): boolean => {
  const rgbCriteria = criteria.backgroundColor?.color?.rgbColor;
  const rgbElement = element.textRun?.textStyle?.backgroundColor?.color?.rgbColor;
  return rgbCriteria?.red === rgbElement?.red
    && rgbCriteria?.green === rgbElement?.green
    && rgbCriteria?.blue === rgbElement?.blue;
};

/**
 * This processes a single structural element and returns list of paragraph indexes
 * @param element the document body to parse
 */
const processElement = (element: docsV1.Schema$StructuralElement, list: IndexList): IndexList => {
  // If this is a paragraph, process it
  if (element.paragraph) {
    const startIndex: number = element.startIndex || 0;
    const endIndex: number = element.endIndex || 0;

    // Convert the elements in the paragraph into strings
    const content = (element.paragraph.elements || [])
      .filter((elem) => matchesCriteria(matchCriteria, elem));

    const paragraphStyle: docsV1.Schema$ParagraphStyle = element.paragraph.paragraphStyle || {};

    list.push({
      startIndex, endIndex, content, paragraphStyle,
    });
  } else if (element.table) {
    // If this is a table, process each cell
    element.table.tableRows?.forEach((row) => {
      row.tableCells?.forEach((cell) => {
        cell.content?.forEach((nestedElem) => processElement(nestedElem, list));
      });
    });
  } else if (element.tableOfContents) {
    // If this is a table of contents, process each content element
    element.tableOfContents.content?.forEach((nestedElem) => processElement(nestedElem, list));
  }

  return list.filter((x) => x.content.length > 0);
};

/**
 * This creates a list of all the start + end indexes of the paragraphs in the document
 * @param body the document body to parse
 */
export const createIndexList = (body: docsV1.Schema$Body): IndexList | undefined => {
  if (!body.content) return undefined;

  const list = body.content
    .reduce((acc: IndexList, curr: docsV1.Schema$StructuralElement) => {
      acc.push(...processElement(curr, acc).map((x) => ({
        ...x,
        content: x.content.map((y) => {
          if (typeof y === 'string') return y;
          return y.textRun?.content;
        }) as string[],
      })));
      return acc;
    }, []);

  // filter all entries that have the same start indexes
  return list
    .filter((x, i) => list.findIndex((y) => y.startIndex === x.startIndex) === i)
    .filter((x) => x.content.length > 0);
};

export const shiftIndex = (
  old: IndexEntry,
  replaced: IndexEntry,
  list: IndexList,
): IndexList => list.map((x) => {
  if (x.startIndex < old.startIndex) return x;

  return {
    ...x,
    startIndex: x.startIndex + (replaced.endIndex - old.endIndex),
    endIndex: x.endIndex + (replaced.endIndex - old.endIndex),
  };
});

export type Destructured = {
  tag: string;
  children: Array<string | Destructured>;
}

export const destructureHTML = (html: string) => {
  const dom = new JSDOM(html);

  const recursive = (node: any): Array<string | Destructured> => {
    if (node.nodeType === 3) { // 3 is a text node
      return [node.textContent || ''];
    }
    const children = [];
    for (let i = 0; i < node.childNodes.length; i++) {
      // ignore \n
      if (node.childNodes[i].textContent?.trim() !== '') {
        children.push(...recursive(node.childNodes[i]));
      }
    }
    return [{
      tag: node.nodeName,
      children,
    }];
  };

  return recursive(dom.window.document.body);
};
