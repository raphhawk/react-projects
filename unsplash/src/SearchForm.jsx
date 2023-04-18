import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { isDarkTheme, setSearchTerm, searchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    console.log(searchTerm);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-4xl md:text-7xl text-purple-500 my-20">
        Unsplash Images
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className={`${
            !isDarkTheme && "border"
          } rounded-l-md p-2 w-40 md:w-96 text-black`}
        />
        <button
          type="submit"
          className="bg-purple-500 p-2 rounded-r-md hover:bg-purple-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
