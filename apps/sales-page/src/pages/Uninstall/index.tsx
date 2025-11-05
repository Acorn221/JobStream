import { useEffect } from 'react';
import icon from 'assets/icon-white.svg';
import { AnalyticsEvent } from './GA';

const Uninstall = () => {
  useEffect(() => {
    AnalyticsEvent([{
      name: 'uninstall',
    }]);
  });

  return (
    <div className="flex-1  flex justify-center align-middle">
      <div className="m-auto flex flex-col p-4 gap-4 ">
        <div className="flex justify-center align-middle">
          <h1 className="text-4xl m-auto flex-1 text-center text-white">Why Did You Uninstall JobStream?</h1>
          <div className="m-auto flex justify-center align-middle flex-1">
            <img src={icon} className="m-auto max-h-[10em] max-w-[10em]" alt="logo" />
          </div>
        </div>
        <iframe
          title="Uninstall Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfLL7uiUCKLDkG9n4CUO8HMAeHx5r7Nr6bjI3qzXCl81v-wkg/viewform?embedded=true"
          className="h-[65vh] w-full m-auto"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Uninstall;
