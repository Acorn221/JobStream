import { namedOperations, useGetGoogleAccessTokenQuery, useUpdateDriveFolderIdMutation } from 'graphql-generated-code';
import { SiGoogledrive } from 'react-icons/si';
import { toast } from 'react-toastify';
import { ToastStyle, GoogleDocsFile, Routes } from 'misc-glob';
import useDrivePicker from 'react-google-drive-picker';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PickerConfiguration } from 'react-google-drive-picker/dist/typeDefs';
import { CardLayout } from '@/pages/Layouts/CardLayout';
import { GOOGLE_APP_ID, GOOGLE_CLIENT_ID, GOOGLE_PICKER_API_KEY } from '@/utils/environment';
import { GAPIAuth } from '@/components/DriveFileList/GAPIAuth';

export const Settings = () => {
  const [openPicker] = useDrivePicker();

  const { data: tokenData, error, loading } = useGetGoogleAccessTokenQuery();

  const [setFolderId] = useUpdateDriveFolderIdMutation({
    refetchQueries: [
      namedOperations.Query.GetUserStats,
    ],
  });

  const onFilesSelected = (fileIds: string[]) => {
    console.log(fileIds);
    toast.promise(
      setFolderId({
        variables: {
          folderId: fileIds[0],
        },
      }),
      {
        pending: 'Updating folder...',
        success: 'Updated folder! 🎉',
        error: 'Error updating folder 😢',
      },
      ToastStyle,
    );
  };

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
            viewId: 'FOLDERS',
            // viewMimeTypes: 'application/vnd.google-apps.folder',
            token: authToken,
            showUploadView: false,
            showUploadFolders: false,
            supportDrives: true,
            multiselect: false,
            setSelectFolderEnabled: true,
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
    <CardLayout
      title="Settings"
      description="Change your settings here!"
      className="flex flex-col gap-4"
    >
      <div className="flex bg-base-200 p-2 rounded-xl gap-4 mr-8 lg:flex-row flex-col">
        <div className="flex-1 m-auto">
          Want to change the folder your CVs and Cover Letters are saved to?
        </div>
        <div className="flex gap-4 justify-center align-middle">
          <Link to="https://drive.google.com/" className="btn btn-info flex justify-center align-middle m-auto" target="_blank">
            <div className="m-auto">
              Open Google Drive
            </div>
            <FiExternalLink className="w-6 h-6 m-auto" />
          </Link>
          <div className={`btn ${tokenData ? 'btn-primary' : 'btn-disabled'} flex jusitfy-center align-middle m-auto`} onClick={() => handleOpenPicker()}>
            <div className="m-auto">
              Select Folder
            </div>
            <SiGoogledrive className="w-6 h-6 m-auto" />
          </div>
        </div>

        <GAPIAuth />
      </div>
    </CardLayout>
  );
};
