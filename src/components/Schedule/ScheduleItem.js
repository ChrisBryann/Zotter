import { useContext } from "react";
import ClassesContext from "../../store/classes-context";
import ClassCard from "../UI/ClassCard";

const ScheduleItem = (props) => {
  const classesCtx = useContext(ClassesContext);
  return (
    <>
      <div
        className={
          classesCtx.classes.length > 0
            ? "my-5 p-3 bg-white shadow-lg overflow-y-auto scrollbar max-h-screen md:rounded-lg"
            : ""
        }
      >
        {classesCtx.classes.map((course, idx) => (
          <ClassCard
            key={idx}
            updateAppointments={classesCtx.updateAppointments}
            deleteAppointments={classesCtx.deleteAppointments}
            onCopy={props.onCopy}
            onNotCopy={props.onNotCopy}
            deptCode={course.deptCode}
            courseNumber={course.courseNumber}
            courseTitle={course.courseTitle}
            sections={course.sections}
          />
        ))}
      </div>
    </>
  );
};

export default ScheduleItem;
