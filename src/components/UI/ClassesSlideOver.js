import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ClassesContext from "../../store/classes-context";

const ClassesSlideOver = ({ open, setOpen }) => {
  const classesCtx = useContext(ClassesContext);

  const onDeleteHandler = (id) => {
    classesCtx.deleteAppointments(id);
    classesCtx.deleteAddedCourses(id);
  };

  const getClassScheduleText = () => {
    let text = "";
    for (const course of classesCtx.addedCourses) {
      text += `${course.title} - ${course.type} ${course.section}\nCode: ${course.code}\nLocation: ${course.location}\nTime: ${course.days} ${course.time}\n\n`;
    }
    return text;
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Class Schedule
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {classesCtx.addedCourses.map((course) => (
                              <li key={course.id} className="flex py-6">
                                {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div> */}

                                <div className="flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{course.title} - {course.type} {course.section}</h3>
                                      <p className="ml-4">{course.code}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {course.location}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      {`${course.days} ${course.time}`}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={onDeleteHandler.bind(
                                          this,
                                          course.id
                                        )}
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Classes</p>
                        <p>{classesCtx.addedCourses.length}</p>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">
                        
                      </p> */}
                      <div className="mt-6">
                        <a
                          href="/"
                          onClick={(e) => {
                            const file = new Blob([getClassScheduleText()], {
                              type: "text/plain",
                            });
                            e.currentTarget.href = URL.createObjectURL(file);
                          }}
                          download={"class_schedule.txt"}
                          className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                        >
                          Download
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or&nbsp;
                          <button
                            type="button"
                            className="font-medium text-blue-600 hover:text-blue-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Scheduling
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ClassesSlideOver;
