import { useState } from "react";
import { peopleData } from "./data";
import { List, cssClasses } from "./components/List";

function App() {
  const [people, setPeople] = useState(peopleData);
  return (
    <main>
      <section className={cssClasses.container}>
        <h3 className=" text-[#1b1821] text-3xl font-medium">
          {people.length} birthdays today
        </h3>
        <List people={people} />
        <button
          type="button"
          className={cssClasses.btn}
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
