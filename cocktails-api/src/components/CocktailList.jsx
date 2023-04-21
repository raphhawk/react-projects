import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="mt-20 text-2xl text-center capitalize font-bold">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="flex flex-col items-center mt-20">
      <h2 className="text-2xl tracking-wider font-bold">Cocktails</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-20">
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} drink={drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
