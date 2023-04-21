import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  return <div className="text-3xl font-bold mt-2">{id}</div>;
};

export default SingleCocktail;
