import { GridRowSelectionModel, GridToolbarContainer } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import type { FC, useRef } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import type { ElementPicker, selectedElement } from '@/contents/ElementPicker';

export type buttonLabels = {
  deleteSelected: string;
  confirmSelection: string;
};

type PickerToolbarProps = {
	elementPicker: ElementPicker;
	selectionModel: GridRowSelectionModel;
	setSelectionModel: (selectionModel: GridRowSelectionModel) => void;
  setShow: (show: boolean) => void;
  toolbarButtonLabels?: buttonLabels;
};

export const pickerToolbar: FC<PickerToolbarProps> = ({
  elementPicker,
  selectionModel,
  setSelectionModel,
  setShow,
  toolbarButtonLabels,
}) => {
  if (!selectionModel) {
    return null;
  }
  const deleteSelected = () => {
    elementPicker.removeElements(selectionModel.map((x) => {
      const value = x.valueOf();
      if (typeof value === 'string') {
        return parseInt(value, 10);
      }
      return value;
    }));

    console.log('deleteSelected', selectionModel);
    setSelectionModel([]);
  };

  return (
    <GridToolbarContainer className="flex">
      <Button color="warning" disabled={selectionModel.length === 0} startIcon={<DeleteIcon />} onClick={() => deleteSelected()}>
        {
          toolbarButtonLabels ? toolbarButtonLabels.deleteSelected : 'Delete Selected'
        }
      </Button>
      <Button className="flex-1" color="success" disabled={elementPicker.selectedElements.length === 0} startIcon={<CheckIcon />} onClick={() => elementPicker.submitPicker()}>
        {
          toolbarButtonLabels ? toolbarButtonLabels.confirmSelection : 'Confirm Selection'
        }
      </Button>
      <div className="flex align-middle items-center">
        <Button color="error" className="m-auto p-0" onClick={() => elementPicker.closePicker()}>
          <CloseIcon className="w-10 h-10 p-0" />
        </Button>

      </div>
    </GridToolbarContainer>
  );
};

export default pickerToolbar;
