import {
  useState,
} from 'react';

import icon from 'assets/icon-white.svg';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { TypeAnimation } from 'react-type-animation';

const url = 'https://j4a.us21.list-manage.com/subscribe/post-json?u=26616d13c907be8b429e33ac0&id=392b4de7bc';

interface CustomFormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (data: { EMAIL: string; }) => void;
}

const CustomForm = ({ status, message, onValidated }: CustomFormProps) => {
  const [email, setEmail] = useState('');

  const submit = (e: any) => {
    e.preventDefault();
    return email !== ''
    && email.indexOf('@') > -1
    && onValidated({
      EMAIL: email,
    });
  };

  return (
    <div>
      {status === 'sending' && <div>sending...</div>}
      {status === 'error' && (
        <div
          className="text-red-400"
          // dangerouslySetInnerHTML={{ __html: message }}

        >
          {message && message.toString()}
        </div>
      )}
      {status === 'success' && (
        <div
          className="text-green-400"
        >
          {message && message.toString()}
        </div>
      )}
      <form className="flex gap-4" onSubmit={submit}>
        <input className="bg-slate-800 text-white rounded-lg p-2 flex-1" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="bg-slate-800 text-white rounded-lg p-2" type="submit">Submit</button>
      </form>
    </div>
  );
};

const Home = () => (
  <div className="flex-1 overflow-hidden text-white flex flex-col justify-center align-middle">
    <div className="text-2xl flex-1 flex justify-center align-middle m-4 min-h-[80vh] lg:flex-row flex-col">
      <img src={icon} className="m-auto max-h-[50vh] max-w-[50vw] lg:pb-0 pb-16" />
      <article className="prose md:prose-xl m-auto rounded-2xl text-white flex-1">
        <h1 className="text-white lg:h-64 h-36">
          <TypeAnimation
            sequence={[
              'Stand out on every application, with a coverletter that is relevant to you',
              3000,
              'Stand out on every application, with well written answers to application questions',
              3000,
              'Stand out on every application, as the best person for the job',
              3000,
              'Stand out on every application, and apply faster than ever before',
              3000,
              'Stand out on every application, with JobStream',
              6000,
            ]}
            wrapper="h5"
            speed={70}
            repeat={Infinity}
          />
        </h1>
        <ul>
          <li>
            Automatically generate cover letters and answer questions
            on job applications, using AI (GPT-4).

          </li>
          <li>
            Apply as fast as possible to jobs whilst making sure you
            {' '}
            <b>stand out</b>
            .
          </li>
          <li>
            Use your relevant personal experience to generate relevant cover letters
            to the job you are applying for, to highlight your skills and experience.

          </li>
          <li>
            Select job descriptions in seconds, using our fast and easy to use chrome extension.
          </li>
          <li>
            Try it out for free now, No credit card required.
          </li>
          <a href="https://app.jobstream.uk/login">
            <div className="btn btn-primary no-underline btn-lg w-96 hover:scale-105">
              Join Now
            </div>
          </a>
        </ul>
        <p />
      </article>
    </div>
  </div>

);

export default Home;
