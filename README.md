# JobStream

![JobStream Icon](https://raw.githubusercontent.com/Acorn221/JobStream/refs/heads/main/assets/icon256.png)

JobStream was created to solve the problem of cover letters and "why I want to work here" questions on job applications.

It uses a turbo monorepo with a chrome extension that lets users select job descriptions, then lets them answer questions on applications with the context of their experience and the job description alongside generating cover letter PDFs via the google docs API.

This was my main project I worked on when coming out of uni, until I joined Verdn (YC W22) where I used this to generate my message to the founders, which they didn't know was AI generated and only found out later.

All content generated was designed to be previewed and edited by the user beforehand

The goal was to have it edit CVs via the google docs API but that was not achievable due to the docs api not being designed for this.


## Original Readme

This project is to help people apply to jobs faster, currently by generating cover letters and CVs for them.
In the future, the plan will be to help fast track the application process by automatically filling in parts of the application forms they are given.

## Long Term TODO
 - [ ] Beta testers
 - [ ] Give out free coins to people who share this on linkedin (or via a referral link)
   - [ ] free promo ftw!
 - [ ] Look into creating a Google Workspace extension for this
   - [ ] https://developers.google.com/workspace https://developers.google.com/workspace/explore

## Backend TODO

 - [ ] GPT api integration
   - [ ] Retry the request if it fails (up to 3 times)
     - [ ] Maybe have an invalid data flag with the gpt function
   - [ ] Request to gpt-3.5/4
     - [x] Include job description + experiences in the prompt
     - [x] Include selected data from the CV
     - [ ] Parsing from GPT back into the CV
       - [ ] Finish parser -- Big job
       - [ ] Play around with gpt functions instead as they might be better suited
     - [ ] Experimentation
       - [ ] Check whether each gpt request should be done individually or in bulk by passing the whole array
       - [ ] See if fine-tuning produces better results
     - [ ] Put the results into the database
     - [ ] Put the returned data back into the CV, upload it to google docs and update the database
     - [ ] Link the user to the CVs location in Google Docs
     - [ ] Let the user download the CV as a PDF
       - [ ] https://developers.google.com/drive/api/guides/manage-downloads
 - [ ] Rate limiting for users
 - [ ] Verify the scope of the google oauth token
   - [ ] https://cloud.google.com/docs/authentication/token-types#access
 - [ ] Bot detection
 - [ ] Testing
   - [ ] Login
   - [ ] Register
   - [ ] update testing to work with new typedefs
   - [x] JWT
   - [ ] GraphQL CRUD

## Frontend TODO
- [ ] Experiences
  - [ ] Add an edit modal to the experiences and disable the mui editing
- [x] On going to login/register page when logged in, redirect to the home page
- [ ] CV Optimiser
  - [ ] Under job descriptions, have the CV optimiser do it's magic, then list the generated CVs
    - [ ] Datagrid to list the generated CVs
- [x] have a standard layout component for {title} { text } then content below
- [ ] Use the standard layout component for all pages
- [ ] Pre-login
  - [ ] Home page
  - [ ] help page
- [ ] User info adding
- [x] Job descriptions
  - [x] Suitability score?
- [x] List selected CVs
	- [ ] List info about how the extractions work and how to get them done right
- [ ] Help page
  - [ ] Tell the user how it works
  - [ ] Tell the user how to use it
  - [ ] Tell the user how to get the most out of it
  - [ ] have a contact form for the user to get in touch


## Extension TODO
 - [ ] What else can the popup show?
   - [ ] list recently generated cover letters/cvs
   - [ ] Potentially like a mini dashboard?
   - [ ] Basic info about the user, like how many CVs they have, how many job descriptions they have
   - [x] Some links to the cv optimiser website
 - [ ] popup automatically on job sites
   - [ ] this will help if the user does not have the extension pinned


## Long Term TODO
 - [ ] Create a Google Workspace extension for this
   - [ ] https://developers.google.com/workspace https://developers.google.com/workspace/explore
   - [ ] Get all the tables / sections from the doc
     - [ ] list all the "paragraphs" in the doc
     - [ ] pass the text in the paragraphs to the model
     - [ ] replace the text in the paragraphs with the output from the model
 - [ ] beta testers
 - [ ] lambda function
   - [ ] how to deploy it with limited tokens per person
   - [ ] use aws cognito to manage users?
