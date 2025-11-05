/* eslint-disable quotes */
import {
  ApplyChanges,
  CreateUpdateRequests,
  ExtractInfo,
  HtmlToRuns,
  ParseStructuralElements,
  TextRunsToHtml,
} from 'docParser';
import { docs_v1 as docsV1 } from 'googleapis';
import SimpleCV from 'simple-cv.json';
import { TextRun } from 'types';

describe('Parses simple CV structure', () => {
  it('Correctly outputs all text runs', () => {
    const parsed = ParseStructuralElements(SimpleCV.body.content);

    expect(parsed).toMatchInlineSnapshot(`
      [
        {
          "Content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at commodo metus, tristique rutrum magna. Maecenas mattis, velit quis malesuada mattis, est diam pharetra turpis, et imperdiet lectus leo quis sapien. Etiam eget consectetur ipsum. Fusce vehicula sapien non suscipit molestie. Maecenas ac ligula interdum, ultricies arcu nec, laoreet enim. Pellentesque ullamcorper facilisis leo, vel elementum magna sollicitudin in. Quisque a eros vitae sapien tincidunt vulputate in et neque. Ut at diam sit amet massa mollis euismod. Nulla congue tempor ligula, ac semper dui ultrices non. Duis pulvinar diam sit amet magna eleifend ultrices. Maecenas nec varius lacus. Sed vel consectetur dui. Cras quis faucibus ante. Vivamus egestas neque nunc, et dictum nunc tincidunt aliquet. Morbi pulvinar vestibulum diam facilisis vehicula.
      ",
          "JsonPath": "1.paragraph.elements.0",
        },
        {
          "Content": "Pellentesque efficitur mauris scelerisque commodo finibus. Donec porttitor tellus eu urna malesuada rhoncus et nec leo. Vestibulum euismod efficitur gravida. Integer pretium rutrum varius. Sed eros erat, bibendum ac nisi sed, tempor blandit urna. In lacinia, ligula id sagittis rhoncus, sapien turpis finibus quam, sit amet dictum lectus mauris eu eros. Morbi eget dapibus justo. Sed sagittis lacus ipsum, tincidunt ornare lectus vehicula quis. In ac libero odio. Donec rhoncus dolor dictum tellus rhoncus vestibulum. Fusce porttitor elit libero, a pretium magna luctus et. Sed ullamcorper enim eu convallis euismod.
      ",
          "JsonPath": "2.paragraph.elements.0",
        },
        {
          "Content": "Nullam magna diam, lacinia nec posuere eu, laoreet vitae dolor. Aenean felis purus, tempor non mattis eget, dapibus vel dui. Mauris mattis vitae lectus eget consectetur. Quisque quis magna et nulla dignissim iaculis non eget felis. Vestibulum id egestas diam, quis lobortis erat. Proin pulvinar consequat massa, nec pretium dolor iaculis a. Fusce quis vestibulum tellus, sit amet sagittis orci. Donec viverra orci id nisi condimentum, et luctus nibh congue.
      ",
          "JsonPath": "3.paragraph.elements.0",
        },
        {
          "Content": "Ut eu diam elementum, aliquam nibh ut, suscipit urna. Pellentesque egestas, lorem at congue ultrices, velit lacus pellentesque enim, sed lacinia ante mauris vel nunc. Cras gravida elit quis orci volutpat, at ornare ligula gravida. Aliquam at ante tempor nibh molestie hendrerit at et sem. Integer feugiat, ante at consequat maximus, magna lorem convallis dui, et eleifend nisl quam vitae enim. Curabitur rutrum odio at sem vestibulum sodales. Phasellus placerat dictum arcu a convallis. Cras nunc magna, sodales eu magna mollis, rutrum rutrum est. Suspendisse ornare a urna at vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus justo sed augue rhoncus, quis elementum ipsum commodo. Cras sed lectus ac quam vehicula lacinia. Praesent convallis hendrerit hendrerit. Nam auctor eu ligula quis tincidunt.
      ",
          "JsonPath": "4.paragraph.elements.0",
        },
        {
          "Content": "
      ",
          "JsonPath": "5.paragraph.elements.0",
        },
        {
          "Bold": true,
          "Content": "I am bold
      ",
          "JsonPath": "6.paragraph.elements.0",
        },
        {
          "Bold": true,
          "Content": "I am underlined and bold
      ",
          "JsonPath": "7.paragraph.elements.0",
          "Underline": true,
        },
        {
          "Content": "I am a link",
          "JsonPath": "8.paragraph.elements.0",
          "Underline": true,
        },
        {
          "Content": "
      ",
          "JsonPath": "8.paragraph.elements.1",
        },
        {
          "Content": "I am a list
      ",
          "JsonPath": "9.paragraph.elements.0",
        },
        {
          "Content": "And I am another element",
          "JsonPath": "10.paragraph.elements.0",
        },
        {
          "Content": "
      ",
          "JsonPath": "10.paragraph.elements.1",
        },
      ]
    `);
  });
});

describe('Can apply changes', () => {
  const evenSimplerCV: docsV1.Schema$Body = {
    content: [
      {
        endIndex: 1,
        sectionBreak: {
          sectionStyle: {
            columnSeparatorStyle: 'NONE',
            contentDirection: 'LEFT_TO_RIGHT',
            marginTop: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginBottom: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginRight: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginLeft: {
              magnitude: 14.4,
              unit: 'PT',
            },
            sectionType: 'CONTINUOUS',
          },
        },
      },
      {
        startIndex: 1,
        endIndex: 837,
        paragraph: {
          elements: [
            {
              startIndex: 1,
              endIndex: 837,
              textRun: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at commodo metus, tristique rutrum magna. Maecenas mattis, velit quis malesuada mattis, est diam pharetra turpis, et imperdiet lectus leo quis sapien. Etiam eget consectetur ipsum. Fusce vehicula sapien non suscipit molestie. Maecenas ac ligula interdum, ultricies arcu nec, laoreet enim. Pellentesque ullamcorper facilisis leo, vel elementum magna sollicitudin in. Quisque a eros vitae sapien tincidunt vulputate in et neque. Ut at diam sit amet massa mollis euismod. Nulla congue tempor ligula, ac semper dui ultrices non. Duis pulvinar diam sit amet magna eleifend ultrices. Maecenas nec varius lacus. Sed vel consectetur dui. Cras quis faucibus ante. Vivamus egestas neque nunc, et dictum nunc tincidunt aliquet. Morbi pulvinar vestibulum diam facilisis vehicula.\n',
                textStyle: {
                  fontSize: {
                    magnitude: 10.5,
                    unit: 'PT',
                  },
                  weightedFontFamily: {
                    fontFamily: 'Arial',
                    weight: 400,
                  },
                },
              },
            },
          ],
          paragraphStyle: {
            namedStyleType: 'NORMAL_TEXT',
            alignment: 'JUSTIFIED',
            direction: 'LEFT_TO_RIGHT',
            spaceBelow: {
              magnitude: 11,
              unit: 'PT',
            },
            borderBetween: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderTop: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderBottom: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderLeft: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderRight: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    red: 1,
                    green: 1,
                    blue: 1,
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  it('Tests a simple change', () => {
    const changes: Array<TextRun> = [
      {
        Content: 'This is the new content that should be applied',
        JsonPath: '1.paragraph.elements.0',
      },
    ];

    const changed = ApplyChanges(evenSimplerCV, changes);

    expect(changed).toMatchInlineSnapshot(`
      [
        {
          "content": [
            {
              "endIndex": 1,
              "sectionBreak": {
                "sectionStyle": {
                  "columnSeparatorStyle": "NONE",
                  "contentDirection": "LEFT_TO_RIGHT",
                  "marginBottom": {
                    "magnitude": 14.4,
                    "unit": "PT",
                  },
                  "marginLeft": {
                    "magnitude": 14.4,
                    "unit": "PT",
                  },
                  "marginRight": {
                    "magnitude": 14.4,
                    "unit": "PT",
                  },
                  "marginTop": {
                    "magnitude": 14.4,
                    "unit": "PT",
                  },
                  "sectionType": "CONTINUOUS",
                },
              },
            },
            {
              "endIndex": 837,
              "paragraph": {
                "elements": [
                  {
                    "endIndex": 837,
                    "startIndex": 1,
                    "textRun": {
                      "content": "This is the new content that should be applied",
                      "textStyle": {
                        "fontSize": {
                          "magnitude": 10.5,
                          "unit": "PT",
                        },
                        "weightedFontFamily": {
                          "fontFamily": "Arial",
                          "weight": 400,
                        },
                      },
                    },
                  },
                ],
                "paragraphStyle": {
                  "alignment": "JUSTIFIED",
                  "borderBetween": {
                    "color": {},
                    "dashStyle": "SOLID",
                    "padding": {
                      "unit": "PT",
                    },
                    "width": {
                      "unit": "PT",
                    },
                  },
                  "borderBottom": {
                    "color": {},
                    "dashStyle": "SOLID",
                    "padding": {
                      "unit": "PT",
                    },
                    "width": {
                      "unit": "PT",
                    },
                  },
                  "borderLeft": {
                    "color": {},
                    "dashStyle": "SOLID",
                    "padding": {
                      "unit": "PT",
                    },
                    "width": {
                      "unit": "PT",
                    },
                  },
                  "borderRight": {
                    "color": {},
                    "dashStyle": "SOLID",
                    "padding": {
                      "unit": "PT",
                    },
                    "width": {
                      "unit": "PT",
                    },
                  },
                  "borderTop": {
                    "color": {},
                    "dashStyle": "SOLID",
                    "padding": {
                      "unit": "PT",
                    },
                    "width": {
                      "unit": "PT",
                    },
                  },
                  "direction": "LEFT_TO_RIGHT",
                  "namedStyleType": "NORMAL_TEXT",
                  "shading": {
                    "backgroundColor": {
                      "color": {
                        "rgbColor": {
                          "blue": 1,
                          "green": 1,
                          "red": 1,
                        },
                      },
                    },
                  },
                  "spaceBelow": {
                    "magnitude": 11,
                    "unit": "PT",
                  },
                },
              },
              "startIndex": 1,
            },
          ],
        },
        [
          {
            "insertText": {
              "location": {
                "index": 837,
              },
              "text": ".",
            },
          },
          {
            "deleteContentRange": {
              "range": {
                "endIndex": 837,
                "startIndex": 1,
              },
            },
          },
          {
            "insertText": {
              "location": {
                "index": 1,
              },
              "text": "This is the new content that should be applied",
            },
          },
          {
            "deleteContentRange": {
              "range": {
                "endIndex": 48,
                "startIndex": 47,
              },
            },
          },
        ],
      ]
    `);
  });
});

describe('takes parsed content and turns it into nice AI friendly HTML', () => {
  const evenSimplerCV: docsV1.Schema$Body = {
    content: [
      {
        endIndex: 1,
        sectionBreak: {
          sectionStyle: {
            columnSeparatorStyle: 'NONE',
            contentDirection: 'LEFT_TO_RIGHT',
            marginTop: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginBottom: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginRight: {
              magnitude: 14.4,
              unit: 'PT',
            },
            marginLeft: {
              magnitude: 14.4,
              unit: 'PT',
            },
            sectionType: 'CONTINUOUS',
          },
        },
      },
      {
        startIndex: 1,
        endIndex: 837,
        paragraph: {
          elements: [
            {
              startIndex: 1,
              endIndex: 837,
              textRun: {
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at commodo metus, tristique rutrum magna. Maecenas mattis, velit quis malesuada mattis, est diam pharetra turpis, et imperdiet lectus leo quis sapien. Etiam eget consectetur ipsum. Fusce vehicula sapien non suscipit molestie. Maecenas ac ligula interdum, ultricies arcu nec, laoreet enim. Pellentesque ullamcorper facilisis leo, vel elementum magna sollicitudin in. Quisque a eros vitae sapien tincidunt vulputate in et neque. Ut at diam sit amet massa mollis euismod. Nulla congue tempor ligula, ac semper dui ultrices non. Duis pulvinar diam sit amet magna eleifend ultrices. Maecenas nec varius lacus. Sed vel consectetur dui. Cras quis faucibus ante. Vivamus egestas neque nunc, et dictum nunc tincidunt aliquet. Morbi pulvinar vestibulum diam facilisis vehicula.\n',
                textStyle: {
                  fontSize: {
                    magnitude: 10.5,
                    unit: 'PT',
                  },
                  weightedFontFamily: {
                    fontFamily: 'Arial',
                    weight: 400,
                  },
                },
              },
            },
          ],
          paragraphStyle: {
            namedStyleType: 'NORMAL_TEXT',
            alignment: 'JUSTIFIED',
            direction: 'LEFT_TO_RIGHT',
            spaceBelow: {
              magnitude: 11,
              unit: 'PT',
            },
            borderBetween: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderTop: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderBottom: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderLeft: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            borderRight: {
              color: {},
              width: {
                unit: 'PT',
              },
              padding: {
                unit: 'PT',
              },
              dashStyle: 'SOLID',
            },
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    red: 1,
                    green: 1,
                    blue: 1,
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  it('Should turn into HTML', () => {
    const parsed = ParseStructuralElements(evenSimplerCV.content!);

    const html = TextRunsToHtml(parsed);
    expect(html).toMatchInlineSnapshot(
      `"<p id="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at commodo metus, tristique rutrum magna. Maecenas mattis, velit quis malesuada mattis, est diam pharetra turpis, et imperdiet lectus leo quis sapien. Etiam eget consectetur ipsum. Fusce vehicula sapien non suscipit molestie. Maecenas ac ligula interdum, ultricies arcu nec, laoreet enim. Pellentesque ullamcorper facilisis leo, vel elementum magna sollicitudin in. Quisque a eros vitae sapien tincidunt vulputate in et neque. Ut at diam sit amet massa mollis euismod. Nulla congue tempor ligula, ac semper dui ultrices non. Duis pulvinar diam sit amet magna eleifend ultrices. Maecenas nec varius lacus. Sed vel consectetur dui. Cras quis faucibus ante. Vivamus egestas neque nunc, et dictum nunc tincidunt aliquet. Morbi pulvinar vestibulum diam facilisis vehicula.<br/></p>"`,
    );
  });

  it('Converts harder CV to html', () => {
    const cv: docsV1.Schema$Body = {
      content: [
        {
          paragraph: {
            elements: [
              {
                textRun: {
                  content: 'Hello\nWorld\n',
                },
              },
              {
                textRun: {
                  content: '\nJames\n Arnott - \n',
                },
              },
            ],
          },
        },
      ],
    };

    expect(
      TextRunsToHtml(ParseStructuralElements(cv.content!)),
    ).toMatchInlineSnapshot(
      `"<p id="0">Hello<br/>World<br/></p><p id="1"><br/>James<br/> Arnott - <br/></p>"`,
    );
  });
});

describe('ExtractInfo function', () => {
  it('returns ID and paragraph content', () => {
    expect(ExtractInfo('<p id="0">Hello<br/>World<br/></p>'))
      .toMatchInlineSnapshot(`
      [
        "0",
        "Hello
      World
      ",
      ]
    `);
  });

  it('works on slighly strange input', () => {
    expect(
      ExtractInfo(
        '   <p       id=  "myId"  >SomeContent?<<<<>>>><br>////></p>      ',
      ),
    ).toMatchInlineSnapshot(`
      [
        "myId",
        "SomeContent?<<<<>>>><br>////>",
      ]
    `);
  });

  it('throws if no paragraph is found', () => {
    expect(() => ExtractInfo('no p')).toThrowErrorMatchingInlineSnapshot(
      `"Should always match the initial of a paragraph (<p>)"`,
    );
  });

  it('throws if only beginning of paragraph is found', () => {
    expect(() => ExtractInfo('<p>')).toThrowErrorMatchingInlineSnapshot(
      `"Should always match the end of a paragraph (</p>)"`,
    );
  });

  it('throws if no id is found', () => {
    expect(() =>
      ExtractInfo('<p id="">hello</p>'),
    ).toThrowErrorMatchingInlineSnapshot(
      `"ID should be prevent, found an empty ID tag"`,
    );
  });
});

describe('Applies changes to a run, given html', () => {
  it('Works on a simple example', () => {
    const runs: Array<TextRun> = [
      {
        Content: 'Hello World',
        JsonPath: 'something',
      },
    ];

    const html = '<p id="0">New content</p>';

    expect(HtmlToRuns(runs, html)).toMatchInlineSnapshot(`
      [
        {
          "Content": "New content",
          "JsonPath": "something",
        },
      ]
    `);
  });

  it('Works on a more complicated example', () => {
    const runs: Array<TextRun> = [
      {
        Content: 'Some content\n',
        JsonPath: 'something',
      },
      {
        Content: '\nMore content\n',
        JsonPath: 'something',
      },
    ];

    const html =
      '<p id="0">Very cool content<br/></p><p id="1"><br/>Super cool content<br/></p>';

    expect(HtmlToRuns(runs, html)).toMatchInlineSnapshot(`
      [
        {
          "Content": "Very cool content
      ",
          "JsonPath": "something",
        },
        {
          "Content": "
      Super cool content
      ",
          "JsonPath": "something",
        },
      ]
    `);
  });
});

describe('Full unit test', () => {
  const inbetweenPregex = /(?<=">)(.+?)(?=<\/p>)/g;
  const cv = SimpleCV.body;

  it('Tests HTML output of simple CV', () => {
    const parsed = ParseStructuralElements(cv.content);
    expect(parsed.length).toMatchInlineSnapshot(`12`);

    const html = TextRunsToHtml(parsed);

    expect(html).toMatchInlineSnapshot(
      `"<p id="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at commodo metus, tristique rutrum magna. Maecenas mattis, velit quis malesuada mattis, est diam pharetra turpis, et imperdiet lectus leo quis sapien. Etiam eget consectetur ipsum. Fusce vehicula sapien non suscipit molestie. Maecenas ac ligula interdum, ultricies arcu nec, laoreet enim. Pellentesque ullamcorper facilisis leo, vel elementum magna sollicitudin in. Quisque a eros vitae sapien tincidunt vulputate in et neque. Ut at diam sit amet massa mollis euismod. Nulla congue tempor ligula, ac semper dui ultrices non. Duis pulvinar diam sit amet magna eleifend ultrices. Maecenas nec varius lacus. Sed vel consectetur dui. Cras quis faucibus ante. Vivamus egestas neque nunc, et dictum nunc tincidunt aliquet. Morbi pulvinar vestibulum diam facilisis vehicula.<br/></p><p id="1">Pellentesque efficitur mauris scelerisque commodo finibus. Donec porttitor tellus eu urna malesuada rhoncus et nec leo. Vestibulum euismod efficitur gravida. Integer pretium rutrum varius. Sed eros erat, bibendum ac nisi sed, tempor blandit urna. In lacinia, ligula id sagittis rhoncus, sapien turpis finibus quam, sit amet dictum lectus mauris eu eros. Morbi eget dapibus justo. Sed sagittis lacus ipsum, tincidunt ornare lectus vehicula quis. In ac libero odio. Donec rhoncus dolor dictum tellus rhoncus vestibulum. Fusce porttitor elit libero, a pretium magna luctus et. Sed ullamcorper enim eu convallis euismod.<br/></p><p id="2">Nullam magna diam, lacinia nec posuere eu, laoreet vitae dolor. Aenean felis purus, tempor non mattis eget, dapibus vel dui. Mauris mattis vitae lectus eget consectetur. Quisque quis magna et nulla dignissim iaculis non eget felis. Vestibulum id egestas diam, quis lobortis erat. Proin pulvinar consequat massa, nec pretium dolor iaculis a. Fusce quis vestibulum tellus, sit amet sagittis orci. Donec viverra orci id nisi condimentum, et luctus nibh congue.<br/></p><p id="3">Ut eu diam elementum, aliquam nibh ut, suscipit urna. Pellentesque egestas, lorem at congue ultrices, velit lacus pellentesque enim, sed lacinia ante mauris vel nunc. Cras gravida elit quis orci volutpat, at ornare ligula gravida. Aliquam at ante tempor nibh molestie hendrerit at et sem. Integer feugiat, ante at consequat maximus, magna lorem convallis dui, et eleifend nisl quam vitae enim. Curabitur rutrum odio at sem vestibulum sodales. Phasellus placerat dictum arcu a convallis. Cras nunc magna, sodales eu magna mollis, rutrum rutrum est. Suspendisse ornare a urna at vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus justo sed augue rhoncus, quis elementum ipsum commodo. Cras sed lectus ac quam vehicula lacinia. Praesent convallis hendrerit hendrerit. Nam auctor eu ligula quis tincidunt.<br/></p><p id="4"><br/></p><p id="5">I am bold<br/></p><p id="6">I am underlined and bold<br/></p><p id="7">I am a link</p><p id="8"><br/></p><p id="9">I am a list<br/></p><p id="10">And I am another element</p><p id="11"><br/></p>"`,
    );
    const aiHtml = html.replaceAll(inbetweenPregex, 'this is AI stuff');

    const newRuns = HtmlToRuns(parsed, aiHtml);
    expect(newRuns).toMatchSnapshot();
  });
});

describe('Update Request Formation', () => {
  it('should return an update request', () => {
    const cv: docsV1.Schema$Body = {
      content: [
        {
          startIndex: 0,
          endIndex: 14,
          paragraph: {
            elements: [
              {
                startIndex: 0,
                endIndex: 14,
                textRun: {
                  content: 'this is a test',
                },
              },
            ],
          },
        },
      ],
    };

    const runs = [
      {
        Content: 'this is a test to update the cv',
        JsonPath: '0.paragraph.elements.0',
      },
    ];

    const shift = 0;

    // call the function to create the update requests
    const [newShift, requests] = CreateUpdateRequests(
      shift,
      // @ts-ignore
      (cv.content[0].paragraph.elements[0] as docsV1.Schema$ParagraphElement)!,
      runs[0].Content,
    );

    expect(requests.length).toBe(4);

    expect(newShift).toBe(
      runs[0].Content.length -
        // @ts-ignore
        cv.content[0].paragraph.elements[0].textRun.content.length,
    );

    expect(requests).toMatchInlineSnapshot(`
      [
        {
          "insertText": {
            "location": {
              "index": 14,
            },
            "text": ".",
          },
        },
        {
          "deleteContentRange": {
            "range": {
              "endIndex": 14,
              "startIndex": 0,
            },
          },
        },
        {
          "insertText": {
            "location": {
              "index": 0,
            },
            "text": "this is a test to update the cv",
          },
        },
        {
          "deleteContentRange": {
            "range": {
              "endIndex": 32,
              "startIndex": 31,
            },
          },
        },
      ]
    `);
  });
});
