Docs doc: https://googleapis.github.io/google-api-python-client/docs/dyn/docs_v1.documents.html#create



# The Plan

- [ ] Create a list of extracted paragraphs
- [ ] Use startIndex and endIndex for grouping
- [ ] Use the paragraph style (paragraphStyle.namedStyleType) to determine whether or not the paragraph is a heading or NORMAL_TEXT

Check this out and see if it's worth using:
https://github.com/filipedeschamps/parse-google-docs-json/blob/master/source/parser.js

## The new plan

- [ ] Destructure the HTML list into an object
- [ ] Find out where all the tags are for the paragraphs and headings
  - [ ] if extractedHeadings.length === originalHeadings.length then we can assume that the headings are in the right place
  - [ ] If they don't have the same content then we can replace their content with the modified content
  - [ ] If there are a different number of headings
    - [ ] Deal with this later
    - [ ] see if it's possible to just tack it on to the end of the document
  - [ ] for each heading
    - [ ] remove it
    - [ ] replace it with the startIndex of the old one
  - [ ] for each paragraph
		- [ ] remove it
		- [ ] replace it with the startIndex of the old one