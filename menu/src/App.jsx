import "./App.css";
import { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["All", ...new Set(items.map((i) => i.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    let newItems = items.filter((i) => i.category === category);
    console.log(newItems);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div>
          <h2 className="title">Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
