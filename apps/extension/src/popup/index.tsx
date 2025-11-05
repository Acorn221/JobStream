/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import '@/popup/style.css';
import { useStorage } from '@plasmohq/storage/hook';
import browser from 'webextension-polyfill';
import { GrSelect } from 'react-icons/gr';
import { GiInfo } from 'react-icons/gi';
import { FaCoins } from 'react-icons/fa';
import { FiSettings, FiLogIn } from 'react-icons/fi';
import icon from 'data-base64:~/assets/icon-white.svg';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { GetUserCreditsSumDocument, type GetUserCreditsSumQueryResult } from 'graphql-generated-code';
import { setContext } from '@apollo/client/link/context';
import { Routes } from 'misc-glob';
import { Storage } from '@plasmohq/storage';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { sendToBackground } from '@plasmohq/messaging';
import { checkAndRefreshAccessToken, openTab } from '@/background/utils';
import { FRONTEND_URL, GRAPHQL_URL } from '@/misc/environment';
import { SelectionCard } from './SelectionCard';
import { Info } from './Info';
import { Settings } from '@/components/popup/Settings';

enum menuOptions {
  settings,
  info,
}

/**
 * Gets the current tab's job description (requests it from the background script)
 */
const getJobDescription = () => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: 'getJobDescription' }).then((response) => {
      console.log(response);
      sendToBackground({
        name: 'sendAnalyticsEvent',
        body: {
          params: {
            name: 'popup',
            params: {
              action: 'get_job_description',
            },
          },
        },
      });
    });
  });
  window.close();
};

/**
 * Gets the current tab's job description (requests it from the background script)
 */
const getQuestion = () => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { action: 'getQuestion' }).then((response) => {
      console.log(response);
      sendToBackground({
        name: 'sendAnalyticsEvent',
        body: {
          params: {
            name: 'popup',
            params: {
              action: 'get_question',
            },
          },
        },
      });
    });
  });
  window.close();
};

const IndexPopup = () => {
  const [menuTab, setMenuTab] = useStorage<menuOptions>('menuTab', menuOptions.settings);
  const [refreshToken] = useStorage<string | undefined>('refresh');
  const [creditsSum, setCreditsSum] = useStorage<number | null>('creditsSum', null);

  const getCreditsSum = async () => {
    if (refreshToken === undefined) return null;
    const authLink = setContext(async (_, { headers }) => {
      // check to see if the access token needs to be refreshed
      const storage = new Storage({
        area: 'sync',
      });
      return {
        headers: {
          ...headers, // TODO: this doesn't check if the token is valid
          Authorization: `Bearer ${(await checkAndRefreshAccessToken(storage)).id_token}`,
        },
      };
    });
    const client = new ApolloClient({
      link: authLink.concat(createHttpLink({ uri: GRAPHQL_URL })),
      cache: new InMemoryCache(),
    });
    console.log(client);
    const res = await client.query({
      query: GetUserCreditsSumDocument,
    });

    console.log(res);

    if (res.data.user.__typename === 'QueryUserSuccess') {
      setCreditsSum(res.data.user.data.creditsSum);
      return res.data.user.data.creditsSum;
    }
    return null;
  };

  useEffect(() => {
    if (refreshToken) {
      getCreditsSum();
    }
  }, [refreshToken]);

  useEffect(() => {
    sendToBackground({
      name: 'sendAnalyticsEvent',
      body: {
        params: {
          name: 'popup',
          params: {
            action: 'open_popup',
          },
        },
      },
    });
  }, []);

  useEffect(() => {
    sendToBackground({
      name: 'sendAnalyticsEvent',
      body: {
        params: {
          name: 'popup',
          params: {
            action: 'change_tab',
            tab: menuOptions[menuTab],
          },
        },
      },
    });
  }, [menuTab]);

  return (
    <div className="w-[300px] min-h-[600px] font['Montserrat'] font-light bg-zinc-900">
      <div className="w-full h-full absolute text-white flex flex-col ">
        <div
          className="text-2xl bg-base-100 p-3 shadow-2xl text-center cursor-pointer select-none flex justify-center align-middle"
          onClick={() => openTab(`${FRONTEND_URL}/home`)}
        >
          <div className="flex m-auto gap-2 justify-center align-middle">
            <div className="flex-1 plexMono m-auto">
              JobStream
            </div>
            <img src={icon} alt="logo" className="h-10 w-10" />
          </div>
        </div>
        <div className="flex flex-col">
          {
            refreshToken ? (
              <>
                <div className="m-2 plexMono" onClick={() => getJobDescription()}>
                  <div className="btn btn-primary w-full flex justify-center items-center h-16">
                    <div className="m-auto flex-1 text-xl">
                      Select Job Description
                    </div>
                    <GrSelect className="h-10 w-10 m-auto invert" />
                  </div>
                </div>
                <div className="m-2 plexMono" onClick={() => getQuestion()}>
                  <div className="btn bg-cyan-600 hover:bg-cyan-700 w-full flex justify-center items-center h-16 text-white">
                    <div className="m-auto flex-1 text-xl">
                      Answer Question
                    </div>
                    <AiOutlineQuestionCircle className="h-10 w-10 m-auto" />
                  </div>
                </div>
              </>
            ) : (
              <a href={`${FRONTEND_URL}/login`} target="_blank" rel="noreferrer">
                <div className="m-2">
                  <div className="btn btn-primary w-full flex justify-center items-center h-16">
                    <div className="m-auto flex-1 text-xl">
                      Login
                    </div>
                    <FiLogIn className="h-10 w-10 m-auto" />
                  </div>
                </div>
              </a>
            )
          }
        </div>
        <div className="rounded-2xl flex gap-4 w-full items-center justify-center">
          <div className="flex gap-4 w-full mx-4 my-2">
            <SelectionCard
              title="Info"
              icon={<GiInfo className="h-10 w-10 mx-auto mb-1" />}
              onClick={() => setMenuTab(menuOptions.info)}
              selected={menuTab === menuOptions.info}
            />
            <SelectionCard
              title="Settings"
              icon={<FiSettings className="h-10 w-10 mx-auto mb-1" />}
              onClick={() => setMenuTab(menuOptions.settings)}
              selected={menuTab === menuOptions.settings}
            />
          </div>
        </div>
        <div className="flex-1">
          {menuTab === menuOptions.settings && (
            <Settings />
          )}

          {menuTab === menuOptions.info && (
            <Info />
          )}
        </div>
        <div>
          <div className="bottom-0 text-center m-2 w-full text-md font-medium flex-none flex justify-center align-middle">

            <a
              href={`${FRONTEND_URL}${Routes.Credits}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                sendToBackground({
                  name: 'sendAnalyticsEvent',
                  body: {
                    params: {
                      name: 'popup',
                      params: {
                        action: 'open_credits',
                      },
                    },
                  },
                });
              }}
            >
              <div className="btn btn-secondary flex justify-center align-middle plexMono">
                <div className="m-auto text-2xl">
                  {
                    creditsSum != null && (
                      creditsSum
                    )
                  }
                </div>
                <FaCoins className="h-10 w-10 m-auto" />
              </div>
            </a>

            <a
              href="https://j4a.uk/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center align-middle"
              onClick={() => {
                sendToBackground({
                  name: 'sendAnalyticsEvent',
                  body: {
                    params: {
                      name: 'popup',
                      params: {
                        action: 'open_j4a',
                      },
                    },
                  },
                });
              }}
            >
              <div className="m-auto text-md plexMono">
                By J4a Industries
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default IndexPopup;
