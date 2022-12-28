import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleForm from "./ScheduleForm";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 md:col-start-1 md:col-end-2">
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
