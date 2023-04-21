import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${searchTerm}`);
      const cocktailsData = await resp.json();
      console.log(cocktailsData);
      const { drinks } = cocktailsData;
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    return null;
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ cocktails, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
