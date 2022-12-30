import React from "react";

const ClassesContext = React.createContext({
  classes: [],
  updateClasses: (data) => {},
  clearClasses: () => {},
});

export default ClassesContext;
