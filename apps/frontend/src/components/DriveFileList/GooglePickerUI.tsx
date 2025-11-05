import { FC } from 'react';
import { toast } from 'react-toastify';
import { useGetGoogleAccessTokenQuery } from 'graphql-generated-code';
import { ToastStyle, GoogleDocsFile } from 'misc-glob';
import useDrivePicker from 'react-google-drive-picker';
import { SiGoogledrive } from 'react-icons/si';
import { PickerConfiguration } from 'react-google-drive-picker/dist/typeDefs';
import { GOOGLE_APP_ID, GOOGLE_CLIENT_ID, GOOGLE_PICKER_API_KEY } from '@/utils/environment';

export type GooglePickerProps = {
  onFilesSelected: (fileIds: string[]) => void;
  mimeTypes?: string;
};

export const GooglePickerUI: FC<GooglePickerProps> = ({ onFilesSelected, mimeTypes }) => {
  const [openPicker] = useDrivePicker();

  const { data: tokenData, error, loading } = useGetGoogleAccessTokenQuery();

  const handleOpenPicker = () => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: GOOGLE_PICKER_API_KEY,
        })
        .then(async () => {
          // Waiting for the auth tokens to be fetched
          while (loading) {
            // eslint-disable-next-line no-await-in-loop
            await new Promise((resolve) => { setTimeout(resolve, 50); });
          }

          if (!tokenData?.GetGoogleAccessToken) {
            toast.error('Please try again later', ToastStyle);
            throw new Error('error getting auth tokens');
          }

          const authToken = tokenData.GetGoogleAccessToken;

          const pickerConfig: PickerConfiguration = {
            clientId: GOOGLE_CLIENT_ID,
            appId: GOOGLE_APP_ID,
            developerKey: GOOGLE_PICKER_API_KEY,
            viewId: 'DOCS',
            viewMimeTypes: mimeTypes || 'application/vnd.google-apps.document',
            token: authToken,
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: (data: any) => {
              console.log(data);
              if (data.action === 'picked') {
                onFilesSelected(data.docs.map((doc: GoogleDocsFile) => doc.id));
              }
            },
          };
          openPicker(pickerConfig);
        });
    });
  };

  return (
    <div className="btn btn-primary mt-auto mb-2 mr-2 flex jusitfy-center align-middle" onClick={() => handleOpenPicker()}>
      <div className="m-auto">
        Select Files
      </div>
      <SiGoogledrive className="w-6 h-6 m-auto" />
    </div>
  );
};
