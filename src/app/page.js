"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react";
import $ from "jquery";
import Modal from "./modal";
var nouns = ["girl", "boy", "man", "woman", "animal", "kitty", "dog"];
var adjectives = ["giant", "tiny", "funny", "sad", "strange", "cute", "dumb"];
var verbs = [
  "jumping",
  "running",
  "exploding",
  "dying",
  "laughing",
  "awesome",
  "stupid",
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [prompt, setPrompt] = useState();
  const [botchat, setBotChat] = useState();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(true);
  const handleChange = (e) => {
    setPrompt(e.target.value);
    console.log(prompt);
  };
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [call, setCall] = useState(false);
  const handleClick = () => {
    //11111111111111111

    var randIndex = Math.floor(Math.random() * 7);
    var noun = nouns[randIndex];
    var adjective = adjectives[randIndex];
    var verb = verbs[randIndex];

    ///////////////////////////

    setState(false);

    setCall(!call);
    const list = "The " + adjective + " " + noun + " is " + verb + ".";
    setIsActive(!isActive);
    if (isActive) {
      const newData = {
        Human: list,
        Bot: prompt
          ? botchat
          : "I'm sorry, I need more information about what you are looking for. Can you please provide more context or a specific question?",
      };
      setData([...data, newData]);
    }
  };

  const handleClear = () => {
    setData([]);
    setState(true);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const [sidebar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar(!sidebar);
  };
  // const handleChat = () => {
  //   setPrompt("");
  //   setBotChat(
  //     "As an AI language model, I am not aware of who you are.However, you are a user interacting with me through a device that supports JavaScript."
  //   );
  //   const newData = {
  //     Human: prompt,
  //     Bot: prompt
  //       ? botchat
  //       : "I'm sorry, I need more information about what you are looking for. Can you please provide more context or a specific question?",
  //   };
  //   setData([...data, newData]);
  // };

  return (
    <>
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div
            class={`animation-slide-right-small inline-block transition ease-in-out duration-500 sm:flex flex-col py-8 pl-6 pr-2 w-64  dark:bg-gray-800 flex-shrink-0  ${
              sidebar ? "block fixed h-full z-10" : "hidden"
            }`}
            style={{
              background:
                "linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)",
            }}
          >
            <div class="flex flex-row items-center justify-center h-12 w-full">
              <div class="flex items-center justify-center rounded-2xl text-indigo-700 h-10 w-10">
                <img src="./logo_icon.png" />
              </div>
              <div class="ml-2 font-bold text-2xl">Quick Learning</div>
            </div>
            <div class="flex flex-col items-center  mt-4 w-full py-6 px-4 rounded-lg">
              <div class="h-40 w-40 rounded-full border overflow-hidden">
                <img src="./logo.png" alt="Avatar" class="h-full w-full" />
              </div>
              <div class="flex flex-row items-center mt-3">
                {/* <div class="switch leading-none ml-1 text-xs">
                  <input
                    type="checkbox"
                    class="switch__input "
                    id="Switch"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                  <label
                    class="switch__label h-3 w-3 bg-white rounded-full self-end mr-1"
                    for="Switch"
                  >
                    <span class="switch__indicator"></span>
                    <span class="switch__decoration"></span>
                  </label>
                </div> */}
              </div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs mt-6">
                <span class="font-bold text-[20px]">Settings</span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2">
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                  onClick={handleModal}
                >
                  <div class="flex items-center justify-center h-8 w-8 rounded-full">
                    <img src="./key.png" />
                  </div>
                  <div class="ml-2 text-md font-medium">license</div>
                </button>
                <button
                  onClick={handleClear}
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div class="flex items-center justify-center h-8 w-8 rounded-full">
                    <img src="./clear.png" />
                  </div>
                  <div class="ml-2 text-md font-medium">Clear</div>
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col flex-auto h-full p-6"
            style={{
              background:
                "linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)",
            }}
          >
            <div
              className="sm:hidden block relative"
              style={{ marginLeft: sidebar ? "15rem" : "" }}
              onClick={handleSidebar}
            >
              <button>
                <img
                  src={sidebar ? "./sidebar_left.png" : "sidebar_right.png"}
                  className="w-[20px]"
                />
              </button>
            </div>
            <div
              class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-[#ffb27b30] dark:bg-black h-full p-4 "
              onClick={() => setSideBar(false)}
            >
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div
                  class="flex flex-col h-full"
                  style={{
                    justifyContent: state ? "center" : "inherit",
                  }}
                >
                  {state ? (
                    <div
                      className="text-center"
                      style={{
                        display: state ? "block" : "none",
                      }}
                    >
                      <p className="text-[35px] font-bold">
                        Welcome to ChatGPT UI
                      </p>
                      <p className="text-[20px] font-semibold mt-[15px]">
                        Chatbot UI is an open source clone of OpenAI's ChatGPT
                        UI.
                      </p>
                      <p className="text-[20px] font-normal mt-[15px]">
                        Important: Chatbot UI is 100% unaffiliated with OpenAI.
                      </p>
                    </div>
                  ) : null}

                  <div class="grid grid-cols-12 gap-y-2">
                    {data.map((item) => {
                      return (
                        <>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                                <img src="./human.png" />
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>{item.Human}</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex items-center justify-start">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                                <img src="./bot.png" />
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>{item.Bot}</div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* {data.Human} */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className={`MicButton ${
                    isActive ? "active" : ""
                  } flex justify-center items-center`}
                  onClick={handleClick}
                >
                  {/* <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z"
                      fill="currentColor"
                    />
                  </svg> */}
                  <span class="flex h-3 w-3 pointer-events-none">
                    {call ? (
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
                        style={{
                          width: "40px",
                          height: "40px",
                          margin: "-14px -14px",
                        }}
                      ></span>
                    ) : null}

                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                  <div class="pulse-ring"></div>
                </button>
              </div>
              {/* <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    onChange={handleChange}
                    value={prompt}
                  />
                  <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  onClick={handleChat}
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal modalshow={handleModal} /> : null}
    </>
  );
}
