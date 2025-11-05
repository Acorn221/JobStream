/* eslint-disable react/no-array-index-key */
import type { PlasmoCSConfig } from 'plasmo';
import browser from 'webextension-polyfill';
import { sendToBackground } from '@plasmohq/messaging';
import cssText from 'data-text:~/src/contents/style.css';
import './injected.css';
import createCache from '@emotion/cache';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { MuiTheme } from 'misc-glob';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { ElementPicker, EventTargetEventType, type selectedElement } from '@/contents/ElementPicker';
import type { JobDescription } from '@/types';
import { PickerUI } from '@/components/contents/PickerUI';

const styleElement = document.createElement('style');

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  run_at: 'document_end',
};

export const getStyle = () => styleElement;

/**
 * This is the picker ui that is shown when the user clicks on open picker button in the popup.
 * It is responsible for showing the selected elements and sending the job
 * description to the background script.
 */
const JobDescriptionSelector = () => {
  const elementPicker = useRef(new ElementPicker());

  const mouseOver = useCallback((e: MouseEvent) => {
    elementPicker.current.handleElementHoverIn(e);
  }, []);

  const mouseOut = useCallback((e: MouseEvent) => {
    elementPicker.current.handleElementHoverOut(e);
  }, []);

  const click = useCallback((e: MouseEvent) => {
    elementPicker.current.handleElementSelection(e);
  }, []);

  const [elementsSelected, setElementsSelected] = useState<selectedElement[]>([]);

  const [show, setShow] = useState(false);

  const styleCache = useRef(createCache({
    key: 'plasmo-mui-cache',
    container: styleElement,
  }));

  // if the user closes the picker, stop the picker
  useEffect(() => {
    if (!setShow) {
      elementPicker.current.stopPicker();
    }
    console.log(elementPicker);
  }, [setShow]);

  useEffect(() => {
    styleElement.textContent += cssText;

    // listen for messages from the popup
    browser.runtime.onMessage.addListener((request, _sender, sendResponse) => {
      if (request.action === 'getJobDescription') {
        if (show) return;
        setShow(true);
        elementPicker.current.startPicker();

        document.addEventListener('mouseover', mouseOver, true);
        document.addEventListener('mouseout', mouseOut, true);
        document.addEventListener('click', click, true);
      } else if (request.action === 'getQuestion') {
        setShow(false);
      }
    });

    elementPicker.current.addEventListener(EventTargetEventType.SelectedElementsUpdate, (e) => {
      const evt = e as CustomEvent<selectedElement[]>;
      const elements = evt.detail;
      setElementsSelected(elements);
    });

    elementPicker.current.addEventListener(EventTargetEventType.PickerSubmit, () => {
      document.removeEventListener('mouseover', mouseOver, true);
      document.removeEventListener('mouseout', mouseOut, true);
      document.removeEventListener('click', click, true);
      const selectedElementsText = elementPicker.current.selectedElements
        .map((x) => x.element.innerText);

      console.log(selectedElementsText);
      setShow(false);
      setElementsSelected([]);
      sendToBackground<JobDescription>({
        name: 'newJobDescription',
        body: {
          content: selectedElementsText,
          url: window.location.href,
        },
      }).then((res) => {
        console.log(`Message from background: ${res}`);
        elementPicker.current.selectedElements = [];
      });
    });

    elementPicker.current.addEventListener(EventTargetEventType.PickerClosed, () => {
      setShow(false);
      setElementsSelected([]);
      document.removeEventListener('mouseover', mouseOver, true);
      document.removeEventListener('mouseout', mouseOut, true);
      document.removeEventListener('click', click, true);
    });
  }, []);

  return (
    <CacheProvider value={styleCache.current}>
      <ThemeProvider theme={MuiTheme}>
        <PickerUI
          elementPicker={elementPicker}
          show={show}
          setShow={setShow}
          title="Select Job Description"
          elementsSelected={elementsSelected}
          setElementsSelected={setElementsSelected}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default JobDescriptionSelector;
