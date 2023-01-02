import { Fragment } from "react";

const ClassCard = (props) => {
  const onAddHandler = (days, time, location, courseTitle, courseType) => {
    console.log(days, time, location, courseTitle, courseType);
    if (time.trim() === "TBA") {
      console.log("no time, will add to list");
    } else {
      props.updateAppointments({
        days,
        time,
        location,
        courseTitle,
        courseType,
      });
    }
  };

  return (
    <div className="my-3">
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
            sectionNum,
            units,
            instructors,
            meetings: [{ days, time: Time, bldg: Location }],
            finalExam,
            maxCapacity,
            numCurrentlyEnrolled: { totalEnrolled },
            numOnWaitlist,
            restrictions,
            status,
          } = section;
          const rest = {
            "Instructor(s)": instructors,
            "Final Exam": finalExam,
            Location,
            Time,
            "Day(s)": days,
            "Unit(s)": units,
            Section: sectionNum,
            Restrictions: restrictions,
            Status:
              status === "OPEN" || status === "FULL"
                ? status
                : status + ` (${numOnWaitlist} student(s) waitlisted)`,
          };
          return (
            <Fragment>
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-4">
                  <span
                    className={
                      (totalEnrolled / maxCapacity === 1
                        ? "bg-red-600 text-white"
                        : totalEnrolled / maxCapacity >= 0.5
                        ? "bg-yellow-500 text-black"
                        : "bg-green-400 text-black") +
                      " float-right rounded-full px-2 py-1 text-sm font-semibold"
                    }
                  >
                    Enrolled: {`${totalEnrolled}/${maxCapacity}`}
                  </span>
                  <span
                    className={
                      (sectionType === "Lec"
                        ? "bg-lec"
                        : sectionType === "Dis"
                        ? "bg-dis"
                        : "bg-lab") +
                      " rounded-full px-2 py-1 font-bold text-white"
                    }
                  >
                    {sectionType}
                  </span>
                </div>
                {Object.keys(rest).map(
                  (key) =>
                    rest[key] && (
                      <p className="text-base">
                        <span className="font-bold text-md">{key}: </span>
                        <span
                          className={
                            key === "Status"
                              ? "font-bold " +
                                (rest[key] === "OPEN"
                                  ? "text-green-600"
                                  : rest[key] === "FULL"
                                  ? "text-black"
                                  : "text-red-600")
                              : ""
                          }
                        >
                          {key === "Instructor(s)"
                            ? rest[key].join(", ")
                            : rest[key]}
                        </span>
                      </p>
                    )
                )}
                <span
                  onClick={() => {
                    props.onNotCopy();
                    setTimeout(() => {
                      props.onCopy();
                    }, 100);
                  }}
                  className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-yellow-300 mt-2 mr-2 hover:cursor-pointer hover:bg-blue-700"
                >
                  {sectionCode}
                </span>
                <div className="text-right mr-1">
                  <button
                    onClick={onAddHandler.bind(
                      this,
                      days,
                      Time,
                      Location,
                      props.deptCode + " " + props.courseNumber,
                      sectionType
                    )}
                    className="inline-flex justify-center rounded-full shadow-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add
                  </button>
                </div>
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
