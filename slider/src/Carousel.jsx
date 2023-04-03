import { shortList, list, longList } from "./data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <section className="relaive flex flex-col items-center my-20 ">
      <div className="flex flex-row items-center">
        {people.map((person, idx) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              style={{ transform: `translateX(${100 * idx}%)` }}
              key={id}
              className=" flex flex-col items-centeR translate-x-full"
            >
              <img
                src={image}
                alt={name}
                className="rounded-full object-cover w-60 h-60 border-4 border-purple-300 drop-shadow-2xl "
              />
              <h2 className="text-2xl uppercase text-purple-500">{name}</h2>
              <p className="capitalize font-bold text-gray-500 px-20">
                {title}
              </p>
              <p className="text-gray-500 max-w-lg md:max-w-5xl">{quote}</p>
              <FaQuoteRight className="text-6xl pt-5 text-purple-700" />
            </article>
          );
        })}
      </div>
      <div className="flex flex-row absolute py-60">
        <button
          type="button"
          className="text-2xl rounded-md text-gray-300 bg-gray-700 mr-40 md:mr-80 hover:text-cyan-200"
          onClick={null}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="text-2xl rounded-md text-gray-300 bg-gray-700 ml-40 md:ml-80 hover:text-cyan-200"
          onClick={null}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
