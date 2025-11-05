/* eslint-disable react/no-array-index-key */
import type {
  GridColDef,
  GridValueGetterParams,
  GridRowSelectionModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import {
  type FC,
  useEffect,
  useState,
} from 'react';
import type { ElementPicker, selectedElement } from '@/contents/ElementPicker';
import { type buttonLabels, pickerToolbar } from './pickerToolbar';

const columns: GridColDef[] = [
  {
    field: 'number',
    headerName: 'Num',
    width: 80,
  },
  {
    field: 'content',
    headerName: 'Content',
    flex: 1,
  },
  {
    field: 'words',
    headerName: 'Words',
    width: 80,
    valueGetter: (params: GridValueGetterParams) => `${params.row.content?.split(' ').length ?? 0}`,
  },
];

type PickerUIProps = {
  elementPicker: React.MutableRefObject<ElementPicker>;
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  toolbarButtonLabels?: buttonLabels;
  elementsSelected: selectedElement[];
  setElementsSelected: (elementsSelected: selectedElement[]) => void;
};

/**
 * This is the picker ui that is shown when the user clicks on open picker button in the popup.
 * It is responsible for showing the selected elements and sending the job
 * description to the background script.
 */
export const PickerUI: FC<PickerUIProps> = ({
  elementPicker,
  show,
  setShow,
  title,
  toolbarButtonLabels,
  elementsSelected,
  setElementsSelected,
}) => {
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'number',
      sort: 'desc',
    },
  ]);

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  // if the user closes the picker, stop the picker
  useEffect(() => {
    if (!setShow) {
      elementPicker.current.stopPicker();
    }
  }, [setShow]);

  if (show) {
    return (
      <div
        className="fixed bottom-0 right-0 z-50 text-white bg-[#1d232a] outline-black outline-2 flex flex-col"
      >
        <div className="text-center m-2 text-2xl rounded-tl-2xl">
          {title}
        </div>
        <DataGrid
          style={{
            width: '30vw',
            minWidth: '500px',
            flexGrow: 1,
          }}
          columns={columns}
          rows={elementsSelected.map((entry, i) => ({
            id: entry.hashed,
            number: i + 1,
            content: entry.element.innerText,
          }))}
          sortModel={sortModel}
          onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
          checkboxSelection
          pageSizeOptions={[5, 10, 15]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
              // the following props are disabled as they're broken with plasmo CS
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          slots={{
            toolbar: pickerToolbar,
          }}
          slotProps={{
            toolbar: {
              elementPicker: elementPicker.current,
              selectionModel,
              setSelectionModel,
              setShow,
              toolbarButtonLabels,
            },
          }}
        />
      </div>
    );
  }

  return null;
};

export default PickerUI;
