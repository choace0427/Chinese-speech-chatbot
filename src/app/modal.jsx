import React, { useState } from "react";

const Modal = ({ modalshow }) => {
  const handleModal = () => {
    console.log("!23123");
    modalshow(false);
  };
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {/* {showModal ? ( */}
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              style={{
                background:
                  "linear-gradient(106.5deg, rgba(255, 215, 185) 23%, rgba(223, 159, 247) 93%)",
              }}
            >
              <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">Settings</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={handleModal}
                >
                  <img src="./cancel.png" className="w-[30px]" />
                </button>
              </div>
              <div className="relative w-[400px] p-[20px] flex-auto">
                <form className="p-[10px]">
                  <label className="text-black text-sm font-bold mb-1 flex justify-between">
                    OpenAI API key
                    <a href="https://platform.openai.com/docs/api-reference/completions/create">
                      Get yours
                    </a>
                  </label>
                  <input className="shadow appearance-none border rounded-full w-full py-2 px-1 text-black" />
                  <label className="text-black text-sm font-bold mb-1 flex justify-between mt-[20px]">
                    Model
                    <a href="https://platform.openai.com/docs/api-reference/completions/create">
                      See docs
                    </a>
                  </label>
                  <select
                    id="gpt-type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="gpt-3.5">gpt-3.5-turbo</option>
                    <option value="gpt-4">gpt-4</option>
                    <option value="gpt-4-32k">gpt-4-32k</option>
                  </select>
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={handleModal}
                >
                  Close
                </button>
                <button
                  className="text-white rounded-full active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{
                    background:
                      "radial-gradient(circle at 10% 20%, rgb(249, 57, 170) 9.8%, rgb(134, 176, 255) 94.9%) ",
                  }}
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* ) : null} */}
    </>
  );
};

export default Modal;
