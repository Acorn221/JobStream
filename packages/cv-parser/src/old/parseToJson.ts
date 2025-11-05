/* eslint-disable no-param-reassign */
import { docs_v1 as docsV1 } from 'googleapis';
import { paragraphStyleMap, processTypes } from 'old/parser';

export const getAverageStyle = (para: docsV1.Schema$Paragraph) => {
  const elementCount = para.elements?.length || 0;
  const halfCount = elementCount / 2;
  const styleCount = new Map();

  para.elements?.forEach((el) => {
    const s = el.textRun?.textStyle;
    if (!s?.link && s) {
      Object.keys(s).forEach((k) => {
        const count = styleCount.get(k) || 0;
        styleCount.set(k, count + 1);
      });
    }
  });

  return para.elements?.reduce((acc, curr) => {
    const s = curr.textRun?.textStyle;
    if (!s?.link && s) {
      Object.keys(s).forEach((k) => {
        if (styleCount.get(k) > halfCount) {
          // @ts-ignore - this is a bit janky but it's needed
          acc[k] = s[k];
        }
      });
    }
    return acc;
  }, {} as docsV1.Schema$TextStyle);
};

export const getParentElement = (str: string): string => {
  const parent = /<([a-z0-9]+)>/i.exec(str);
  if (parent) {
    return parent[1];
  }
  return 'p';
};

export const destructureHTML = (html: string) => {
  const parentElement = getParentElement(html);
};

/**
 *
 * @param para the paragraph to replace the contents of
 * @param style the style to apply to the new elements
 * @param content the HTML content to replace the elements with
 */
export const replaceElements = (
  para: docsV1.Schema$Paragraph,
  style: docsV1.Schema$TextStyle,
  content: string,
) => {
  // recursivley destructure the content by tags
  // build up the paragraph elements based on the given style and the tags
  // replace the elements in the paragraph with the new elements
  // const elements = content.split(/(<[a-z0-9]+>)/i).filter((e) => e.length > 0);
  para = {
    elements: [
      {
        textRun: {
          content: 'hi',
        },
      },
    ],
  };
  return para;
};

export const reAssemble = (cv: any, paragraphs: string[]) => {
  /* plan for this function:
		1. treat paragraphs as a stack
		2. iterate through the cv object
		3. if the current object is a paragraph, pop from the stack and assign to the content
		4. if the current object is an array or other object, iterate through it and recurse
		6. if there are mis-aligned paragraphs or headers
			6.1 if there are more paragraphs than content, add the extra paragraphs to the end of the
				section, using the headers as seperators and siblings for styling
			6.2 if there are more headers than previously, add the extra headers to the end of the
				section, using similar styling to the previous headers and have the sub-paragraphs
				use the same styling as the previous headers
		7. Calculate the startIndex and the endIndex in the content array for each section
		8. if the table rows/cols count is different, calculate the difference and add the extra
		9. pray to the gods of the internet that this works
	*/
  let stackPtr = 0;
  const parseCv = (obj: any): any => {
    if (!obj) return null;
    if (obj instanceof Array) {
      return obj.map((item: any) => parseCv(item));
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).reduce((acc: any, key: string) => {
        if (key === processTypes.paragraph) {
          // get the common style of the paragraph
          // ignore link underline and color
          const para = obj[key] as docsV1.Schema$Paragraph;
          const style = getAverageStyle(para) || {};

          // if the paragraph has no content, return
          if (para.elements?.map((e) => e.textRun?.content).join('').trim().replace(/\n/g, '').length === 0) {
            console.log(`Para ${para.elements?.map((e) => e.textRun?.content).join(' ')} has no content`);
            return acc;
          }

          // TODO: check if the paragraphStyle is the same as the current top of the stack
          // get the top of the stack
          const content = paragraphs[stackPtr]; stackPtr++;
          if (content) {
            const parentElement = getParentElement(content).toLowerCase();

            // get the matching google doc code to the parentElement from paragraphStyleMap

            const docStyle = Object.keys(paragraphStyleMap)// @ts-ignore - it doesn't like keys
              .find((k: string) => paragraphStyleMap[k] === parentElement);

            if (docStyle === para.paragraphStyle?.namedStyleType) {
              // if the styles match, replace the content
              acc[key] = replaceElements(para, style, content);
              // acc[key].elements = [];
            } else {
              // TODO: if the styles don't match...
            }
          } else {
            console.log('no content :(');
          }

          return acc;
          // TODO: create a new function to parse the style info + content to be a paragraph
        }
        if (acc[key].elements) {
          acc[key].elements = [];
        }
        const parsed = parseCv(obj[key]);
        if (parsed) {
          return { [key]: parsed, ...acc };
        }
        return acc;
      }, obj);
    }

    return null;
  };
  return parseCv(cv);
};
