import icon from 'assets/icon-white.svg';
import { CardLayout } from '../Layouts/CardLayout';

const Help = () => (
  <CardLayout
    title={(
      <div className="flex justify-center align-middle gap-4 my-2">
        <img src={icon} alt="logo" className="h-32 w-32 m-auto" />
        <div className="m-auto">Need Help? Here&apos;s our FAQ</div>
      </div>
    )}

  >
    <article className="prose md:prose-xl bg-base-200 p-4 rounded-2xl">
      <h3>What is JobStream?</h3>
      <p>
        JobStream is a tool to help you more efficiently apply for jobs, through
        automatically generating cover letters and answering any questions on the
        job application.
      </p>
      <h3>How does it work?</h3>
      <p>
        JobStream allows you to select job descriptions, with the chrome extension,
        within seconds, to then let you generate cover letters and answer any
        questions on the job application.
      </p>
      <h3>How do I get started?</h3>
      <p>
        To get started, click the login button in the top right hand corner of the screen
        and follow the instructions.
      </p>
      <h3>How do I use the chrome extension?</h3>
      <p>
        To use the chrome extension, pin it to your chrome toolbar, then open it on a
        job description page and select the job description.
      </p>
      <h3>Need more info?</h3>
      <p>
        Email us at
        {' '}
        <a href="mailto:help@jobstream.uk">help@jobstream.uk</a>
      </p>
    </article>
  </CardLayout>
);

export default Help;
