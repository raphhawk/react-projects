import { useState } from "react";
import data from "../data";
import { css } from "../../../css.jsx";

export const Reviews = () => {
  const [index, setIndex] = useState(0);
  const randomPerson = () => {
    let rand = Math.floor(Math.random() * data.length);
    if (rand === index) {
      if (rand + 1 > data.length - 1) {
        setIndex(0);
      } else if (rand - 1 < 0) {
        setIndex(data.length - 1);
      }
    } else {
      setIndex(rand);
    }
  };
  return (
    <article className={css.divCard}>
      <img src={data[index].image} alt="" className={css.imgCircle} />
      <h1 className={css.caps}>{data[index].name}</h1>
      <h1 className={css.allCaps}>{data[index].job}</h1>
      <h1 className="text-center">{data[index].text}</h1>
      <div className={css.divArrows}>
        <button
          type="button"
          className={css.arrows}
          onClick={() =>
            index === 0 ? setIndex(data.length - 1) : setIndex(index - 1)
          }
        >{`<`}</button>
        <button
          type="button"
          className={css.arrows}
          onClick={() =>
            index === data.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
        >{`>`}</button>
      </div>
      <button type="button" className={css.btnCyan} onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};
