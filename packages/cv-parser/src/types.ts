export interface TextRunBase {
  Content: string;
  JsonPath: string;
}

export interface TextRunDefault extends TextRunBase {
  Bold?: boolean;
  Italics?: boolean;
  Underline?: boolean;
}

export type TextRun = TextRunDefault;
