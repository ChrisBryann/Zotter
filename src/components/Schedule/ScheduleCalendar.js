import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import classesContext from "../../store/classes-context";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

const ScheduleCalendar = () => {
  // TODO: add functionality to click the scheduled class on calendar and show a pop up card, done from the devexpress framework
  const classesCtx = useContext(classesContext); //assuming we already have an array of scheduled classes to present, we then pass the array to "data" props in Scheduler component
  const commitChangesHandler = ({ deleted }) => {
    if (deleted !== undefined) {
      console.log(deleted.split("@")[0]);
      classesCtx.deleteAppointments(deleted);
      classesCtx.deleteAddedCourses(deleted.split("@")[0]);
    }
  };

  return (
    <div className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      <div className="overflow-y-auto shadow-lg rounded-lg">
        <Paper>
          <Scheduler data={classesCtx.appointments}>
            <EditingState onCommitChanges={commitChangesHandler} />
            <IntegratedEditing />
            <WeekView
              excludedDays={[0, 6]}
              startDayHour={7.5}
              endDayHour={21.5}
            />
            <Appointments />
            <AppointmentTooltip showCloseButton showDeleteButton />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
