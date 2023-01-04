import React from "react";

const ClassesContext = React.createContext({
  classes: [],
  appointments: [],
  updateClasses: (data) => {},
  clearClasses: () => {},
  updateAppointments: (data) => {},
  deleteAppointments: (id) => {},
  clearAppointments: () => {},
});

export default ClassesContext;
