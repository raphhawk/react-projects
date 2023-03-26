import "./App.css";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs);
  return <h2>Tabs project</h2>;
};

export default App;
