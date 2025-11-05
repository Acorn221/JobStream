import { useCheckIfTokenExistsQuery } from 'graphql-generated-code';
import { FC } from 'react';
import { GooglePickerProps, GooglePickerUI } from '@/components/DriveFileList/GooglePickerUI';

export const DriveDatagridAuthCheck: FC<GooglePickerProps> = ({
  onFilesSelected,
}) => {
  const { data: tokenExists } = useCheckIfTokenExistsQuery();
  // TODO: add the picker
  if (tokenExists?.user.__typename === 'QueryUserSuccess' && tokenExists.user.data.GoogleAuthToken) {
    return (
      <GooglePickerUI
        onFilesSelected={onFilesSelected}
      />
    );
  }
  return <div />;
};
