import { useEffect, useState } from "react";

export default function ScheduleForm() {
  const [terms, setTerms] = useState([]);
  const [genEd, setgenEd] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [term, setTerm] = useState("");
  const [ge, setGE] = useState("");
  const [department, setDepartment] = useState("");

  const setTermHandler = (e) => {
    setTerm(e.target.value)
  };
  const setGenEdHandler = (e) => {
    setGE(e.target.value)
  };
  const setDepartmentHandler = (e) => {
    setDepartment(e.target.value)
  };
  
  useEffect(() => {
    const getFormInfo = async () => {
      await fetch('http://127.0.0.1:5000/get-form-info').then(async data => {
        const res = await data.json();
        setTerms(res.terms);
        setTerm(res.terms[0])
        setDepartments(res.departments);
        setDepartment(res.departments[0].type)
        setgenEd(res.genEducation);
        setGE(res.genEducation[0].type)
      }).catch(err => {
        console.log(err.message);
      })
    }
    getFormInfo();
  }, [])

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(term, department, ge)
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
                    value={term}
                    name="term"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    onChange={setTermHandler}
                  >
                    {terms.map((item, idx) => (
                      <option key={idx} value={item}>{item}</option>
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
                    value={ge}
                    name="general-education"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    onChange={setGenEdHandler}
                  >
                    {genEd.map((item, idx) => (
                      <option key={idx} value={item.type}>{item.value}</option>
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
                    value={department}
                    name="department"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    onChange={setDepartmentHandler}
                  >
                    {departments.map((item, idx) => (
                      <option key={idx} value={item.type}>{item.value}</option>
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
