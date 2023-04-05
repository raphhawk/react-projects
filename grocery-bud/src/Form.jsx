import { useState } from "react";
import { css } from "./css";
import Items from "./Items";
import { toast } from "react-toastify";

const Form = ({ addItem, removeItem, items, editItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return toast.error("No items added");
    addItem(item);
    setItem("");
  };
  return (
    <div className={css.formDiv}>
      <h2 className="capitalize text-3xl mb-10 text-brown-500">grocery bud</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:flex-row"
      >
        <input
          type="text"
          name="grocery"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          add item
        </button>
      </form>
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </div>
  );
};

export default Form;
