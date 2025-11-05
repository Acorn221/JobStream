/* eslint-disable no-param-reassign */
import { google, docs_v1 as docsV1 } from 'googleapis';
import { paragraphStyleMap } from 'old/parser';
import { Destructured, IndexList } from './misc';

export class ModificationRequests {
  requests: docsV1.Schema$Request[] = [];

  indexList: IndexList;

  shiftedIndexList: IndexList = [];

  destructured: Destructured;

  constructor(indexList: IndexList, destructured: Destructured) {
    this.indexList = indexList;
    this.destructured = destructured;
  }

  getShiftedIndexListEntry() {
    const entry = this.indexList.shift();
    if (entry) {
      this.shiftedIndexList.unshift(entry);
    }
    return entry;
  }

  processDestructured(dest: Destructured) {
    if (!dest.children) {
      console.log('no children');
      return;
    }
    // check if all the children of the destructured are strings
    const childrenStrings = dest.children.reduce((acc, curr) => {
      if (typeof curr === 'string') return acc;
      return false;
    }, true);

    if (childrenStrings) {
      const docStyle = Object.keys(paragraphStyleMap)// @ts-ignore - it doesn't like keys
        .find((k: string) => paragraphStyleMap[k].toLowerCase() === dest.tag.toLowerCase());

      const entry = this.getShiftedIndexListEntry();
      if (entry) {
        if (entry.paragraphStyle.namedStyleType === docStyle) {
          // replace the text in the index entry
          this.addRequest({
            deleteContentRange: {
              range: {
                startIndex: entry.startIndex,
                endIndex: entry.endIndex - 1, // -1 because we want to keep the newline
                // TODO: might need to check if the last character is a newline
              },
            },
          });
          this.addRequest({
            insertText: {
              location: {
                index: entry.startIndex,
              },
              text: dest.children.join(''),
            },
          });
        } else if (docStyle === 'NORMAL_TEXT') {
          // if it's still just a p tag, we can add it on to the end of the previous paragraph
          // if it exists and is also a paragraph
          const lastInsert = this.requests[this.requests.length - 1].insertText;

          if (!lastInsert) throw new Error('No last insert found when trying to add non-indexed paragraph');
          if (!lastInsert?.location?.index || !lastInsert?.text) throw new Error('Invalid last insert found when trying to add non-indexed paragraph');
          const indexToInsert = lastInsert.location.index + lastInsert.text.length;

          this.addRequest({
            insertText: {
              location: {
                index: indexToInsert,
              },
              text: `\n${dest.children.join('')}`,
            },
          });
          // then un-shift the index list
          this.indexList.unshift(entry);
        } else {
          throw new Error(`No corresponding index entry found for ${docStyle} and ${entry.paragraphStyle.namedStyleType} (dest content: ${dest.children.join('')})`);
        }
      } else {
        throw new Error('No index entry found');
      }
    } else {
      for (let i = 0; i < dest.children.length; i++) {
        const child = dest.children[i];
        if (typeof child === 'object') {
          this.processDestructured(child);
        }
      }
    }
  }

  addRequest(request: docsV1.Schema$Request) {
    if (request.deleteContentRange) {
      const { range } = request.deleteContentRange;
      if (!range?.startIndex || !range?.endIndex) {
        throw new Error(`Invalid deleteContentRange request, no start or end index provided ${JSON.stringify(range)}`);
      }

      const { startIndex, endIndex } = range;
      this.shiftIndex(startIndex, startIndex - endIndex);
      this.requests.push(request);
    } else if (request.insertText) {
      if (!request.insertText.location) {
        throw new Error(`Invalid insertText request, no location provided ${JSON.stringify(request)}`);
      }
      if (!request.insertText.location.index) {
        throw new Error(`Invalid insertText request, no index provided ${JSON.stringify(request)}`);
      }
      if (!request.insertText.text) {
        throw new Error(`Invalid insertText request, no text provided ${JSON.stringify(request)}`);
      }
      const { text } = request.insertText;
      const { index } = request.insertText.location;

      this.shiftIndex(index, text.length);
      this.requests.push(request);
    }
  }

  shiftIndex(index: number, shift: number) {
    this.indexList = this.indexList.map((entry) => {
      if (entry.startIndex >= index) {
        entry.startIndex += shift;
      }
      if (entry.endIndex > index) {
        entry.endIndex += shift;
      }
      return entry;
    });
  }
}
