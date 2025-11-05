import {
  paragraphStyleMap,
  parseTextRun,
  parseParagraph,
  parseJson,
} from 'old/parser';
import { docs_v1 as docsV1 } from 'googleapis';

describe('Paragraph Parser tests', () => {
  test('parseBasicParagraph', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<p>Hello World</p>');
  });
  test('parseParagraphWithLink', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
            textStyle: {
              link: {
                url: 'https://www.google.com',
              },
            },
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<p><a href="https://www.google.com">Hello World</a></p>');
  });
  test('parseParagraphWithMultipleTextRuns', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello',
          },
        },
        {
          textRun: {
            content: ' World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<p>Hello World</p>');
  });
  test('parseParagraphWithMultipleTextRunsAndLink', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello ',
          },
        },
        {
          textRun: {
            content: 'World',
            textStyle: {
              link: {
                url: 'https://www.google.com',
              },
            },
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<p>Hello <a href="https://www.google.com">World</a></p>');
  });
  test('parseParagraphWithMultipleTextRunsAndStyles', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello ',
          },
        },
        {
          textRun: {
            content: 'World',
            textStyle: {
              link: {
                url: 'https://www.google.com',
              },
            },
          },
        },
        {
          textRun: {
            content: '!',
            textStyle: {
              bold: true,
            },
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<p>Hello <a href="https://www.google.com">World</a><b>!</b></p>');
  });
  test('Parsing a paragraph with a varying styles', () => {
    let paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'TITLE',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<h1>Hello World</h1>');

    paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'HEADING_1',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<h2>Hello World</h2>');

    paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'HEADING_2',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<h3>Hello World</h3>');

    paragraph = {
      elements: [
        {
          textRun: {
            content: 'Hello World',
          },
        },
      ],
      paragraphStyle: {
        namedStyleType: 'HEADING_3',
      },
    };
    expect(parseParagraph(paragraph)).toBe('<h4>Hello World</h4>');
  });
  test('parseParagraphWithNoTextRuns', () => {
    const paragraph: docsV1.Schema$Paragraph = {
      elements: [
        {},
      ],
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
      },
    };
    expect(parseParagraph(paragraph)).toBe(null);
  });
});
