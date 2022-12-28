import { useState } from "react";

export default function ScheduleForm() {
  const [terms, setTerms] = useState([]);
  const [genEd, setgenEd] = useState([]);
  const [departments, setDepartments] = useState([]);
  const getTerms = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <>
        <form className="mb-5" onSubmit={submitHandler}>
          <div className="overflow-hidden shadow border-4 border-blue-500 sm:rounded-lg">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="term"
                    className="block text-md font-medium text-gray-700"
                  >
                    Term
                  </label>
                  <select
                    id="term"
                    name="term"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    {terms.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="general-education"
                    className="block text-md font-medium text-gray-700"
                  >
                    General Education
                  </label>
                  <select
                    id="general-education"
                    name="general-education"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    {genEd.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="department"
                    className="block text-md font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    {departments.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
    </>
  );
}
