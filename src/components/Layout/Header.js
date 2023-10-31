import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ClassesSlideOver from "../UI/ClassesSlideOver";

const navigation = [{ name: "Zotter", href: "#", current: false }];


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blue-600">
      <div className="mx-auto sm:ml-10 sm:mr-16 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/">
              <h1 className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 hover:cursor-pointer sm:text-3xl">
                Zotter
              </h1>
            </Link>

            <p className="mt-1.5 text-sm text-white">
              UC Irvine Course Scheduler
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <ArchiveBoxIcon onClick={() => {setOpen(true)}} className="h-6 w-auto text-white hover:text-gray-300 hover:cursor-pointer"/>
          </div>
          <ClassesSlideOver open={open} setOpen={setOpen}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
