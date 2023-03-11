import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { Loading } from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const setInterest = (id) => {
    const newTours = tours.filter((t) => t.id != id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (!tours.length) {
    return (
      <main>
        <div className="text-center text-5xl text-bold p-20">
          <h2>no tours found</h2>
          <button
            type="button"
            className="text-white bg-purple-600 mt-10 rounded-lg p-4"
            onClick={() => {
              setLoading(true);
              fetchData();
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <section className="flex items-center flex-col">
      <h1 className="text-5xl font-bold mt-20">Our Tours</h1>
      <hr className="w-1/2" />
      <Card tours={tours} setInterest={setInterest} />
    </section>
  );
}

export default App;
