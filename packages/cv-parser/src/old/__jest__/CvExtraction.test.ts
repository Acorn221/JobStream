import {
  paragraphStyleMap,
  parseTextRun,
  parseParagraph,
  parseJson,
} from 'old/parser';
import { reAssemble } from 'old/parseToJson';
import { docs_v1 as docsV1 } from 'googleapis';

import cv from 'old/cv.json';

let paragraphs: string[] = [];

beforeAll(() => {
  paragraphs = parseJson(cv.body.content);
});

describe('Whole CV Parser tests', () => {
  test('Parse JSON CV to HTML', () => {
    expect(paragraphs.length).toBeGreaterThan(20);
  });
  test('Parse extracted HTML back to CV', () => {
    // copy the cv object
    const cvCopy = JSON.parse(JSON.stringify(cv));
    const putBackTogether = reAssemble(cvCopy, paragraphs);
    expect(putBackTogether).toEqual(cv);
  });
});
