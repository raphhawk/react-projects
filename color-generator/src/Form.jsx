import React from "react";
import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="flex flex-col md:flex-row m-10">
      <h4 className="text-4xl capitalize ml-10">color generator</h4>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="ml-10 mr-2"
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#3449eb"
          className="bg-gray-100 rounded-md p-2  mr-2 "
        />
        <button
          type="submit"
          className="capitalize bg-[#3449eb] text-white p-2 rounded-md"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
