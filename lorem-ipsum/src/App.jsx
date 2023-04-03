import "./App.css";
import data from "./data";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    const newData = data.slice(0, amount);
    setText(newData);
  };

  return (
    <section className="flex flex-col items-center mt-40 ">
      <h4 className="uppercase text-gray-900 text-3xl">
        tired of boring lorem ipsum?
      </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount " className="capitalize text-gray-800 text-2xl">
          paragraphs:{" "}
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={handleChange}
          className="border-4 rounded-md border-gray-300 bg-gray-300 p-1 hover:border-blue-500"
        />
        <button
          type="submit"
          className="capitalize bg-emerald-400 text-white p-2 rounded-md mx-2 hover:bg-emerald-500"
        >
          generate
        </button>
      </form>
      <article>
        {text.map((para) => {
          return (
            <p key={nanoid()} className="my-10 mx-80 ">
              {para}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
