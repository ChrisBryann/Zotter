import React from "react";

const ClassesContext = React.createContext({
  classes: [],
  appointments: [],
  counter: 0,
  updateClasses: (data) => {},
  clearClasses: () => {},
  updateAppointments: (data) => {},
  clearAppointments: () => {},
});

export default ClassesContext;
