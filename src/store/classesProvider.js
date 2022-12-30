import { useReducer } from "react";
import ClassesContext from "./classes-context";

const defaultClassesState = {
  classes: [],
};

const classesReducer = (state, action) => {
  if (action.type === "UPDATE") {
    return {
      classes: action.data,
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
      type: "UPDATE",
      data,
    });
  };

  const clearClassesHandler = () => {
    dispatchClasses({
      type: "CLEAR",
    });
  };

  const classesContext = {
    classes: classesState.classes,
    updateClasses: updateClassesHandler,
    clearClasses: clearClassesHandler,
  };

  return (
    <ClassesContext.Provider value={classesContext}>
      {props.children}
    </ClassesContext.Provider>
  );
};

export default ClassesProvider;
