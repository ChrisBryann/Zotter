import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import classesContext from "../../store/classes-context";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const ScheduleCalendar = () => {
  const classesCtx = useContext(classesContext); //assuming we already have an array of scheduled classes to present, we then pass the array to "data" props in Scheduler component
  return (
    <div className="lg:col-start-2 lg:col-end-4">
      <div className="max-h-auto overflow-hidden shadow-lg sm:rounded-lg">
        <Paper>
          <Scheduler height="auto" >
            <WeekView
              excludedDays={[0, 6]}
              startDayHour={7.5}
              endDayHour={21.5}
            />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
