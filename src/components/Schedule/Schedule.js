import { useState } from "react";
import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleForm from "./ScheduleForm";
import ScheduleItem from "./ScheduleItem";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Schedule = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copiedHandler = () => {
    setIsCopied(true);
  };
  const notCopiedHandler = () => {
    setIsCopied(false);
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        {isCopied && (
          <div
            className="fixed flex items-center w-full max-w-xs p-4 mb-4 text-white bottom-5 right-5 z-50 bg-blue-600 rounded-lg shadow"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">Code copied!</div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-blue-600 text-white hover:text-gray-100 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-blue-700 inline-flex items-center justify-center h-8 w-8"
              aria-label="Close"
              onClick={notCopiedHandler}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="w-10 h-10"/>
            </button>
          </div>
        )}
        <div className="grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col lg:col-span-1">
            <ScheduleForm />
            <ScheduleItem onCopy={copiedHandler} onNotCopy={notCopiedHandler} />
          </div>

          <ScheduleCalendar />
        </div>
      </div>
    </>
  );
};

export default Schedule;
