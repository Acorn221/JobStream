import { Switch, ThemeProvider, createTheme } from '@mui/material';
import { sendToBackground } from '@plasmohq/messaging';
import { useStorage } from '@plasmohq/storage/hook';
import { MuiTheme } from 'misc-glob';
import { useEffect } from 'react';

const LabledSwitch = ({ checked, setChecked, label }) => (
  <div className="form-control bg-slate-800 rounded-xl">
    <div className="cursor-pointer w-full flex justify-center align-middle">
      <span className="label-text text-center flex-1 m-auto text-xl">{label}</span>
      <Switch aria-label="Autogenerate CV" className="m-auto" checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  </div>
);

export const Settings = () => {
  const [autoGenerateCV, setAutoGenerateCV] = useStorage('autoGenerateCV', false);
  const [autoGenerateCoverLetter, setAutoGenerateCoverLetter] = useStorage('autoGenerateCoverLetter', true);
  const [autoOpenCoverLetter, setAutoOpenCoverLetter] = useStorage('autoOpenCoverLetter', true);
  const [autoOpenJob, setAutoOpenJob] = useStorage('autoOpenJob', true);

  useEffect(() => {
    sendToBackground({
      name: 'sendAnalyticsEvent',
      body: {
        params: {
          name: 'popup',
          params: {
            action: 'change_settings',
            autoGenerateCV,
            autoGenerateCoverLetter,
            autoOpenCoverLetter,
            autoOpenJob,
          },
        },
      },
    });
  }, [autoGenerateCV, autoGenerateCoverLetter, autoOpenCoverLetter, autoOpenJob]);

  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="flex flex-col m-2 gap-4">
        { /*
        // TODO: uncomment when CV generation is implemented
        <LabledSwitch
        checked={autoGenerateCV}
        setChecked={setAutoGenerateCV}
        label="Auto Generate CV" />
        */ }
        <LabledSwitch checked={autoOpenJob} setChecked={setAutoOpenJob} label="Open Job On Selection" />

        <LabledSwitch checked={autoGenerateCoverLetter} setChecked={setAutoGenerateCoverLetter} label="Auto Generate Cover Letter" />
      </div>
    </ThemeProvider>
  );
};
