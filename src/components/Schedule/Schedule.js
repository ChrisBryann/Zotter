import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleForm from "./ScheduleForm";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="lg:col-span-1 lg:col-start-1 lg:col-end-2">
            <ScheduleForm />
            <ScheduleItem />
          </div>
          <ScheduleCalendar />
        </div>
      </div>
    </>
  );
};

export default Schedule;
