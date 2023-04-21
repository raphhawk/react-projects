import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="flex flex-col items-center">
      <form
        className="md:w-1/3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className=" flex flex-col  p-4 shadow-2xl mt-40 border rounded-md ">
          <label
            htmlFor="name"
            className="tracking-wider text-[#6B3074] drop-shadow-md "
          >
            Search Your Favorite Cocktail
          </label>
          <input
            type="text"
            name="name"
            ref={searchValue}
            onChange={searchCocktail}
            className="border p-2 rounded-md mt-4 bg-gray-200 focus:outline-none focus:border-blue-700"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
