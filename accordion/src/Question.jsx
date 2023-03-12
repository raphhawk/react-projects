import { useState } from "react";

export const Question = ({ q }) => {
  const [btn, setBtn] = useState(false);
  return (
    <div className="flex flex-col border my-5 mx-2 p-4 shadow-lg rounded-lg">
      <div className="flex flex-row">
        <h1 className="font-bold grow">{q.title}</h1>
        <button
          type="button"
          className="bg-gray-200 w-8 p-1 rounded-full text-red-500"
          onClick={() => setBtn(!btn)}
        >
          {btn ? "-" : "+"}
        </button>
      </div>
      {btn && <p className="my-4">{q.info}</p>}
    </div>
  );
};
