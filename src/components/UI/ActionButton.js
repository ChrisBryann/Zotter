import { Fragment, useState } from "react";

const ActionButton = (props) => {
  const [added, setAdded] = useState(false);

  return (
    <Fragment>
      {added ? (
        <button
          onClick={() => {
            props.onDeleteHandler();
            setAdded(false);
          }}
          className="inline-flex justify-center rounded-full shadow-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => {
            props.onAddHandler();
            setAdded(true);
          }}
          className="inline-flex justify-center rounded-full shadow-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Add
        </button>
      )}
    </Fragment>
  );
};

export default ActionButton;
