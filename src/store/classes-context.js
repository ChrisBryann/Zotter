import React from "react";

const ClassesContext = React.createContext({
  classes: [],
  addedCourses: [],
  appointments: [],
  updateClasses: (data) => {},
  clearClasses: () => {},
  updateAddedCourses: (data) => {},
  deleteAddedCourses: (id) => {},
  clearAddedCourses: () => {},
  updateAppointments: (data) => {},
  deleteAppointments: (id) => {},
  clearAppointments: () => {},
});

export default ClassesContext;
