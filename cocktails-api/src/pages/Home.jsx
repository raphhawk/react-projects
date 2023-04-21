import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <section className="text-center">
      <SearchForm />
      <CocktailList />
    </section>
  );
};

export default Home;
