import "./App.css";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  //fetch data
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

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/*Button Container*/}
      <BtnContainer
        jobs={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      {/*job info*/}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
