import { Fragment, useState } from "react";

const ClassCard = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const copiedHandler = () => {
    setIsCopied(true);
  };
  const notCopiedHandler = () => {
    setIsCopied(false);
  };
  console.log(props.deptCode, props.courseNumber, props.courseTitle);
  return (
    <div className="my-3">
      {isCopied && (
        <div
          id="alert-3"
          className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
            Code copied!
          </div>
          <button
            type="button"
            onClick={notCopiedHandler}
            className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
            data-dismiss-target="#alert-3"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div className="bg-white max-w-full max-h-full rounded overflow-hidden shadow-2xl">
        <div className="bg-blue-600 p-2">
          <div className="font-bold text-yellow-400 text-2xl mb-4">
            {props.deptCode} {props.courseNumber} - {props.courseTitle}
          </div>
        </div>
        {props.sections.map((section) => {
          const {
            sectionCode,
            sectionType,
            units,
            instructors,
            meetings: { days, time, bldg },
            finalExam,
            maxCapacity,
            numCurrentlyEnrolled,
            numOnWaitlist,
            restrictions,
            status,
          } = section;
          const rest = {
            "Instructor(s)": instructors,
            "Final Exam": finalExam,
            Location: bldg,
            Time: time,
            "Day(s)": days,
            "Unit(s)": units,
            "Maximum Capacity": maxCapacity,
            Restrictions: restrictions,
            Status:
              status === "OPEN"
                ? status
                : status + ` (${numOnWaitlist} student(s) waitlisted)`,
          };
          return (
            <Fragment>
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-4">
                  <span className="float-right bg-red-600 rounded-full px-2 py-1 text-sm font-semibold text-white">
                    {`${numCurrentlyEnrolled.totalEnrolled}/${maxCapacity}`}
                  </span>
                  <span className="bg-blue-600 rounded-full px-2 py-1 font-bold text-white">
                    {sectionType}
                  </span>
                </div>
                {Object.keys(rest).map((key) => (
                  <p className="text-black-700 text-base">
                    <span className="font-bold text-md">{key}: </span>
                    {key === "Instructor(s)" ? rest[key].join(", ") : rest[key]}
                  </p>
                ))}
                <span
                  onClick={() => {
                    notCopiedHandler();
                    setTimeout(() => {
                      copiedHandler();
                    }, 100);
                  }}
                  className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-yellow-300 mt-2 mr-2 hover:cursor-pointer hover:bg-blue-700"
                >
                  {sectionCode}
                </span>
                {/* <div className="block float-right my-5 ml-5 mr-2">
              <button className="justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add
              </button>
            </div> */}
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ClassCard;
