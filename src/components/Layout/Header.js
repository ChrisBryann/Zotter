import { useContext, useState } from "react";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ClassesSlideOver from "../UI/ClassesSlideOver";
import ClassesContext from "../../store/classes-context";

// const navigation = [{ name: "Zotter", href: "#", current: false }];

const Header = () => {
  const [open, setOpen] = useState(false);
  const classCtx = useContext(ClassesContext);
  return (
    <header className="bg-blue-600">
      <div className="mx-auto ml-10 mr-16 px-4 py-4 px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <Link href="/">
              <h1 className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 hover:cursor-pointer sm:text-3xl">
                Zotter
              </h1>
            </Link>

            <p className="mt-1.5 text-sm text-white">
              UC Irvine Course Scheduler
            </p>
          </div>

          <div className="mt-4 flex place-content-center sm:mt-0 sm:flex-row">
            <button className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg">
              <ArchiveBoxIcon
                onClick={() => {
                  setOpen(true);
                }}
                className="h-6 w-auto text-white hover:text-gray-300"
              />
              {classCtx.addedCourses.length > 0 && (
                <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 right-0 dark:border-gray-900">
                  {classCtx.addedCourses.length}
                </div>
              )}
            </button>
          </div>
          <ClassesSlideOver open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
