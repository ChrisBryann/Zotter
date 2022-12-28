import ClassCard from "../UI/ClassCard";

const ScheduleItem = () => {
  return (
    <>
      <div className="mt-5 p-2 overflow-auto max-h-screen md:rounded-lg border-4 border-blue-500">
        <ClassCard />
        <ClassCard />
        <ClassCard /> 
      </div>
    </>
  );
};

export default ScheduleItem;
