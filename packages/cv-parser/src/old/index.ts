/* eslint-disable no-param-reassign */
import fs from 'fs';
import { parseJson } from 'old/parser';
import { google } from 'googleapis';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  TEST_DOC_ID,
} from 'old/environment';
import {
  Destructured, createIndexList, destructureHTML, shiftIndex,
} from 'old/GoogleDocReinserter/misc';
import { ModificationRequests } from 'old/GoogleDocReinserter/ModiticationRequests';

const init = async () => {
  // log the CV text
  // console.log(JSON.stringify(cv.namedStyles));
  // creating a list of all the content elements in the cv, recursively searching through the object

  const oauth2Client = new google.auth.OAuth2({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  });

  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  const docs = google.docs({
    version: 'v1',
    auth: oauth2Client,
  });

  const cv = await docs.documents.get({
    documentId: TEST_DOC_ID,
  });

  if (!cv.data.body) return;

  fs.writeFileSync('src/json/cv.json', JSON.stringify(cv, null, 2));

  const paragraphs: string[] = parseJson(cv.data.body.content);
  console.log(paragraphs);

  const indexList = createIndexList(cv.data.body);

  fs.writeFileSync('src/json/list.json', JSON.stringify(indexList, null, 2));

  // console.log(JSON.stringify(list));

  // console.log(JSON.stringify(destructureHTML(paragraphs.join('\n')), null, 2));

  fs.writeFileSync('src/json/destructured.json', JSON.stringify(destructureHTML(paragraphs.join('\n')), null, 2));

  // reset the document to cvoriginal
  // const res = await docs.documents.batchUpdate({
  //   documentId: TEST_DOC_ID,
  //   requestBody: {
  //     requests: [

  const text = 'Hello World!';

  // const res = await docs.documents.batchUpdate({
  //   documentId: process.env.TEST_DOC_ID,

  //   requestBody: {
  //     requests: [
  //       {
  //         deleteContentRange: {
  //           range: {
  //             startIndex: 97,
  //             endIndex: 103,
  //           },
  //         },
  //       },
  //       {
  //         insertText: {
  //           location: {
  //             index: 97,
  //           },
  //           text,
  //         },
  //       },

  //     ],
  //   },
  // });

  console.log('done');
  // console.log(JSON.parse(JSON.stringify(paragraphs, null, 2)));
};

// init();

const createModificationRequests = async () => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  });

  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  const docs = google.docs({
    version: 'v1',
    auth: oauth2Client,
  });

  const cv = await docs.documents.get({
    documentId: TEST_DOC_ID,
  });

  if (!cv.data.body) {
    throw new Error('No body found');
  }

  const indexList = createIndexList(cv.data.body);

  fs.writeFileSync('src/json/list.json', JSON.stringify(indexList, null, 2));

  if (!indexList) {
    throw new Error('No index list found');
  }

  // const HTMLfromCV: string[] = parseJson(cv.data.body.content);

  // console.log(HTMLfromCV);

  const HTMLfromCV: string[] = [
    '<h1>James Arnott - Software Engineer</h1>',
    '<h2>Skills</h2>',
    '<p>My machine learning skills include a strong understanding of keras, based on tensorflow, alongside data processing libraries such as pandas and matplotlib.</p>',
    '<p>I have worked on projects to use transfer learning, SVMs and KNNs to help classify different medical scans, or to optimize seed generation for animations on lower resolution screens.</p>',
    '<h2>Experience</h2>',
    '<p>I’ve worked in the Royal Holloway Codegroovers team, developing multiple projects, including a wellbeing app for the university.</p>',
    '<p>I’ve also worked many times in a team to work on different projects, like hotel booking, file management and restaurant booking systems at university.</p>',
    '<h2>Interests</h2>',
    '<p>In my spare time, I enjoy rowing, sailing, lifting weights at the gym and programming various projects, 3d printing and 3D CAD and playing around with microcontrollers.</p>',
    '<p>I enjoy working on electronics including upgrading and repairing them, and I have gained knowledge of how lots of commonly used devices function, such as TVs, laptops and computer peripherals.</p>',
    '<p>I keep informed about global politics and new technologies in the software engineering world, alongside artificial intelligence developments and cybersecurity news.</p>',
  ];

  const gptCV = `<h1>James Arnott - JavaScript Fullstack Developer</h1>
  <h2>Skills</h2>
  <p>I possess 2+ years of experience using HTML, CSS, and JavaScript ES6, giving me well-founded knowledge in web development. I am equipped with strong frontend tutoring, utilizing frameworks like React and build tools like Webpack to optimize application performance.</p>
  <p>In addition, I have gained familiarity with backend technologies such as NodeJS and actively use GIT for version control. Also, I bring seasoned machine learning skills, with emphasis on data processing libraries notably pandas and matplotlib, and a proficient understanding of Keras based on TensorFlow.</p>
  <h2>Experience</h2>
  <p>As part of a team project, I co-developed an online attendance manager web application for universities where my focus was primarily on crafting the Frontend interface using React and Tailwind to ensure optimal user-experience.</p>
  <p>I have successfully led technical projects as Vice President of the Royal Holloway Computing Society, including organising major events, developing custom graphics, and programming message boards, reinforcing my command of software design principles and illustrating Machine learning expertise in diagnosing early Alzheimer's and skin cancers.</p>
  <p>Furthermore, I developed a games website in PHP that first kindled my interest in AWS, teaching me valuable insights into creating network subgroups and managing ports for EC2 instances.</p>
  <p>Another successful project was the creation of several Chrome extensions including “LighterFuel” to facilitate user experiences on Tinder, demonstrating my ability to work with modern frameworks such as the Plasmo browser extension, while keeping resource.")]
  <h2>Interests</h2>
  <p>Apart from coding, I revel in physical activities such as rowing and sailing, publishing Arduino bases programs, and working on 3D printing projects. Additionally, I bring a special focus on upgrading and maintaining electronics, gaining a deep understanding of numerous standard devices including TVs, laptops, and computers.</p>
  <p>A part of my professional practice involves keeping updated with global politics, the latest trends in software engineering, artificial intelligence developments, and cybersecurity news.</p>`;

  fs.writeFileSync('src/json/destructured.json', JSON.stringify(destructureHTML(`<body>${gptCV}</body>`), null, 2));

  const destructuredFromCV = destructureHTML(`<body>${gptCV}</body>`)[0] as unknown as Destructured;

  // console.log(JSON.stringify(destructuredFromCV, null, 2));

  const modRequestInstance = new ModificationRequests(indexList, destructuredFromCV);
  modRequestInstance.processDestructured(modRequestInstance.destructured);

  const { requests } = modRequestInstance;

  console.log(JSON.stringify(requests, null, 2));

  const res = await docs.documents.batchUpdate({
    documentId: process.env.TEST_DOC_ID,

    requestBody: {
      requests,
    },
  });
};

createModificationRequests();
