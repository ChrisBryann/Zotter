import { useReducer } from "react";
import ClassesContext from "./classes-context";
import { setToDate, DAYS, COMBINED_DAYS, formatTime } from "./util";

const defaultClassesState = {
  classes: [],
  appointments: [],
  counter: 0,
};

const classesReducer = (state, action) => {
  if (action.type === "UPDATE_CLASSES") {
    return {
      classes: action.data,
      appointments: state.appointments,
      counter: state.counter,
    };
  } else if (action.type === "CLEAR_CLASSES") {
    return {
      classes: [],
      appointments: state.appointments,
      counter: state.counter,
    };
  } else if (action.type === "UPDATE_APPOINTMENTS") {
    let appointments = [];
    let data = action.data;
    let counter = state.counter;
    const [startHours, startMinutes, endHours, endMinutes] = formatTime(
      data.time
    );
    if (data.days.trim() in COMBINED_DAYS) {
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
          id: counter,
          startDate: newStartDate,
          endDate: newEndDate,
          location: data.location,
        });
        counter++;
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
        id: counter,
        startDate: newStartDate,
        endDate: newEndDate,
        location: data.location,
      });
      counter++;
    }
    return {
      classes: state.classes,
      appointments: [...state.appointments, ...appointments],
      counter,
    };
  } else if (action.type === "CLEAR_APPOINTMENTS") {
    return {
      classes: state.classes,
      appointments: [],
      counter: 0,
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

  const updateAppointmentsHandler = (data) => {
    dispatchClasses({
      type: "UPDATE_APPOINTMENTS",
      data,
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
    counter: classesState.counter,
    updateClasses: updateClassesHandler,
    clearClasses: clearClassesHandler,
    updateAppointments: updateAppointmentsHandler,
    clearAppointments: clearAppointmentsHandler,
  };

  return (
    <ClassesContext.Provider value={classesContext}>
      {props.children}
    </ClassesContext.Provider>
  );
};

export default ClassesProvider;
