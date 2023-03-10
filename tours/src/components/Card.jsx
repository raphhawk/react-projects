import { useState, useEffect } from "react";

const Card = ({ url }) => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setTour(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return tour.map((t) => {
    return (
      <div key={t.id} className="w-1/2 h-1/2 pt-20">
        <img src={t.image} alt="tours" className="object-cover h-24" />
        <h1 className="font-bold">{t.name}</h1>
        <p>{t.info}</p>
        <button
          type="button"
          className="text-red-600 border-2 border-red-600 p-1 my-5 rounded-md"
        >
          Not Interested
        </button>
      </div>
    );
  });
};

export default Card;
