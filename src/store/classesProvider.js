import { useReducer } from "react";
import ClassesContext from "./classes-context";
import { setToDate, DAYS, COMBINED_DAYS, formatTime } from "./util";

const defaultClassesState = {
  classes: [],
  addedCourses: [],
  appointments: [],
};

// TODO: Currently storing incrementation as ID, which is redundant.
// Future development requires more secure process to obtain unique ID

const classesReducer = (state, action) => {
  if (action.type === "UPDATE_CLASSES") {
    return {
      ...state,
      classes: action.data,
    };
  } else if (action.type === "CLEAR_CLASSES") {
    return {
      ...state,
      classes: [],
    };
  } else if (action.type === "UPDATE_ADDED_COURSES") {
    return {
      ...state,
      addedCourses: [
        ...state.addedCourses,
        {
          id: `${action.data.courseTitle}-${action.data.sectionNum}`,
          days: action.data.days,
          time: action.data.time,
          location: action.data.location,
          title: action.data.courseTitle,
          type: action.data.courseType,
          section: action.data.sectionNum,
        },
      ],
    };
  } else if (action.type === "DELETE_ADDED_COURSES") {
    return {
      ...state,
      addedCourses: state.addedCourses.filter(
        (course) => course.id !== action.data.id
      ),
    };
  } else if (action.type === "CLEAR_ADDED_COURSES") {
    return {
      ...state,
      addedCourses: [],
    };
  } else if (action.type === "UPDATE_APPOINTMENTS") {
    let appointments = [];
    let data = action.data;
    const [startHours, startMinutes, endHours, endMinutes] = formatTime(
      data.time
    );
    if (data.days.trim() in COMBINED_DAYS) {
      let count = 0;
      for (const day of COMBINED_DAYS[data.days.trim()]) {
        const date = setToDate(new Date(), DAYS[day]);
        const newStartDate = new Date(date);
        newStartDate.setHours(startHours);
        newStartDate.setMinutes(startMinutes);
        const newEndDate = new Date(date);
        newEndDate.setHours(endHours);
        newEndDate.setMinutes(endMinutes);
        appointments.push({
          title: data.courseType + " " + data.courseTitle,
          id: `${data.courseTitle}-${data.sectionNum}@${count++}`,
          startDate: newStartDate,
          endDate: newEndDate,
          location: data.location,
        });
      }
    } else {
      const date = setToDate(new Date(), DAYS[data.days.trim()]);
      const newStartDate = new Date(date);
      newStartDate.setHours(startHours);
      newStartDate.setMinutes(startMinutes);
      const newEndDate = new Date(date);
      newEndDate.setHours(endHours);
      newEndDate.setMinutes(endMinutes);
      appointments.push({
        title: data.courseType + " " + data.courseTitle,
        id: `${data.courseType}-${data.sectionNum}`,
        startDate: newStartDate,
        endDate: newEndDate,
        location: data.location,
      });
    }
    return {
      ...state,
      appointments: [...state.appointments, ...appointments],
    };
  } else if (action.type === "DELETE_APPOINTMENTS") {
    return {
      ...state,
      appointments: state.appointments.filter(
        (appointment) => appointment.id.split("@")[0] !== action.data.id
      ),
    }; // ISSUE: After filtering the deleted appointments, they still appear on the schedule --> FIXED: each appointment must have unique ID
  } else if (action.type === "CLEAR_APPOINTMENTS") {
    return {
      ...state,
      appointments: [],
    };
  }
  return defaultClassesState;
};

const ClassesProvider = (props) => {
  const [classesState, dispatchClasses] = useReducer(
    classesReducer,
    defaultClassesState
  );

  const updateClassesHandler = (data) => {
    dispatchClasses({
      type: "UPDATE_CLASSES",
      data,
    });
  };

  const clearClassesHandler = () => {
    dispatchClasses({
      type: "CLEAR_CLASSES",
    });
  };

  const updateAddedCoursesHandler = (data) => {
    dispatchClasses({
      type: "UPDATE_ADDED_COURSES",
      data,
    });
  };

  const deleteAddedCoursesHandler = (id) => {
    dispatchClasses({
      type: "DELETE_ADDED_COURSES",
      data: {
        id,
      },
    });
  };

  const clearAddedCoursesHandler = () => {
    dispatchClasses({
      type: "CLEAR_ADDED_COURSES",
    });
  };

  const updateAppointmentsHandler = (data) => {
    dispatchClasses({
      type: "UPDATE_APPOINTMENTS",
      data,
    });
  };

  const deleteAppointmentsHandler = (id) => {
    dispatchClasses({
      type: "DELETE_APPOINTMENTS",
      data: {
        id,
      },
    });
  };

  const clearAppointmentsHandler = () => {
    dispatchClasses({
      type: "CLEAR_APPOINTMENTS",
    });
  };

  const classesContext = {
    classes: classesState.classes,
    appointments: classesState.appointments,
    addedCourses: classesState.addedCourses,
    updateClasses: updateClassesHandler,
    clearClasses: clearClassesHandler,
    updateAddedCourses: updateAddedCoursesHandler,
    deleteAddedCourses: deleteAddedCoursesHandler,
    clearAddedCourses: clearAddedCoursesHandler,
    updateAppointments: updateAppointmentsHandler,
    deleteAppointments: deleteAppointmentsHandler,
    clearAppointments: clearAppointmentsHandler,
  };

  return (
    <ClassesContext.Provider value={classesContext}>
      {props.children}
    </ClassesContext.Provider>
  );
};

export default ClassesProvider;
