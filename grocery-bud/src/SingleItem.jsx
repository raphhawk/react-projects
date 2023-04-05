import { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="flex flex-row lg:w-[36rem] md:text-md mb-2">
      <input
        type="checkbox"
        name=""
        value={item.completed}
        onChange={() => {
          editItem(item.id);
        }}
        className="mx-4"
      />
      <p
        className={`capitalize font-bold text-xl grow ${
          item.completed && "line-through"
        }`}
      >
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => {
          removeItem(item.id);
        }}
        className="mx-4 capitalize bg-black rounded-md p-1 text-white tracking-wide hover:bg-gray-600"
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
