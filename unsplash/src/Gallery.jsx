import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

console.log(import.meta.env.VITE_API_KEY);

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="mx-20 text-2xl">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="mx-20 text-2xl ">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="mx-20 text-2xl">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="grid justify-center md:grid-cols-4 lg:grid-cols-5">
      {results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            src={url}
            alt={image.alt_description}
            key={image.id}
            className="p-4 aspect-video w-80 object-cover"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
