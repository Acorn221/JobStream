/* eslint-disable react/no-array-index-key */
import type { PlasmoCSConfig } from 'plasmo';
import browser from 'webextension-polyfill';
import { sendToBackground } from '@plasmohq/messaging';
import cssText from 'data-text:~/src/contents/style.css';
// import './style.css';
import toastifyCss from 'data-text:react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import './injected.css';
import createCache from '@emotion/cache';
import { ToastContainer, toast } from 'react-toastify';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { MuiTheme, ToastStyle } from 'misc-glob';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AiFillCopy } from 'react-icons/ai';
import { ElementPicker, EventTargetEventType, type selectedElement } from '@/contents/ElementPicker';
import { PickerUI } from '@/components/contents/PickerUI';
import { QuestionInterface } from '@/components/contents/QuestionInterface';
import type {
  AnswerQuestionRequest,
  AnswerQuestionResponse,
} from '@/background/messages/answerQuestion';

const styleElement = document.createElement('style');
styleElement.setAttribute('id', 'plasmo-mui-style');

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
const QuestionSelector = () => {
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

  const [showPickerUi, setShowPickerUi] = useState(false);
  const [showQuestionInterface, setShowQuestionInterface] = useState(false);
  const [showAnswerInterface, setShowAnswerInterface] = useState(false);
  const [answerText, setAnswerText] = useState('');

  const answerQuestion = async (text: string, jobId: string) => {
    const res = await sendToBackground<
    AnswerQuestionRequest,
    AnswerQuestionResponse
    >({
      name: 'answerQuestion',
      body: {
        question: text,
        jobId,
      },
    });

    if (res.status === 'FAILURE') {
      console.error(res.payload.error);
      return;
    }

    setShowQuestionInterface(false);
    setShowAnswerInterface(true);
    setAnswerText(res.payload.answer);
  };

  const [questionText, setQuestionText] = useState('');

  const styleCache = useRef(createCache({
    key: 'plasmo-mui-cache',
    container: styleElement,
  }));

  // if the user closes the picker, stop the picker
  useEffect(() => {
    if (!showPickerUi) {
      elementPicker.current.stopPicker();
    } else {
      setShowQuestionInterface(false);
    }
    console.log(elementPicker);
  }, [showPickerUi]);

  useEffect(() => {
    styleElement.innerText += cssText;
    styleElement.innerText += toastifyCss;

    // listen for messages from the popup
    browser.runtime.onMessage.addListener((request, _sender, sendResponse) => {
      if (request.action === 'getQuestion') {
        if (showPickerUi) return;
        setShowPickerUi(true);
        elementPicker.current.startPicker();

        document.addEventListener('mouseover', mouseOver, true);
        document.addEventListener('mouseout', mouseOut, true);
        document.addEventListener('click', click, true);
      } else if (request.action === 'getJobDescription') {
        setShowPickerUi(false);
        setShowQuestionInterface(false);
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
      setShowPickerUi(false);
      setElementsSelected([]);
      setQuestionText(selectedElementsText.join('\n'));
      setShowQuestionInterface(true);
    });

    elementPicker.current.addEventListener(EventTargetEventType.PickerClosed, () => {
      setShowPickerUi(false);
      setElementsSelected([]);
      document.removeEventListener('mouseover', mouseOver, true);
      document.removeEventListener('mouseout', mouseOut, true);
      document.removeEventListener('click', click, true);
    });
  }, []);

  return (
    <div className="plex-mono">
      <CacheProvider value={styleCache.current}>
        <ThemeProvider theme={MuiTheme}>
          {
          showPickerUi && (
            <PickerUI
              elementPicker={elementPicker}
              show
              setShow={setShowPickerUi}
              title="Select a Job Application Question"
              elementsSelected={elementsSelected}
              setElementsSelected={setElementsSelected}
            />
          )
        }
          {
          showQuestionInterface && (
            <QuestionInterface
              setShowQuestionInterface={setShowQuestionInterface}
              questionText={questionText}
              setQuestionText={setQuestionText}
              getAnswer={answerQuestion}
            />
          )
      }
        </ThemeProvider>
      </CacheProvider>
      {
          showAnswerInterface && (
            <div
              className="fixed bottom-0 right-0 z-50 text-white bg-[#1d232a] outline-black outline-2 flex flex-col w-[56rem] pb-4 px-4 rounded-tl-2xl gap-2"
            >
              <div className="text-center text-xl flex justify-center align-middle gap-2 flex-col">
                <div className="flex-none flex justify-center align-middle">
                  <div className="flex-1 m-auto underline text-2xl">
                    Here&apos;s your answer
                  </div>
                  <div className="btn btn-ghost flex justify-center align-middle rounded-full m-2 invert">
                    <CloseIcon className="h-8 w-8 m-auto" onClick={() => setShowAnswerInterface(false)} />
                  </div>
                </div>
                <TextareaAutosize
                  aria-label="minimum height"
                  className="p-4 rounded-xl resize-none montserrat bg-slate-800"
                  minRows={3}
                  maxRows={20}
                  placeholder="The Answer"
                  value={answerText}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAnswerText(e.target.value);
                  }}
                />
              </div>
              <div
                className="btn btn-primary bg-[#641ae6] hover:bg-[#835dc5] text-xl flex-none plex-mono flex justify-center align-middle"
                onClick={() => {
                  navigator.clipboard.writeText(answerText);
                  toast('Copied to clipboard!', {
                    type: 'success',
                    ...ToastStyle,
                  });
                }}
              >
                <div className="m-auto flex-1">Copy To Clipboard</div>
                <div className="m-auto">
                  <AiFillCopy className="w-8 h-8" />
                </div>
              </div>
            </div>
          )
        }
      <ToastContainer />
    </div>
  );
};

export default QuestionSelector;
