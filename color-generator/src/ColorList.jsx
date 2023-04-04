import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-6  m-10">
      {colors.map((color, idx) => {
        return <SingleColor color={color} idx={idx} key={nanoid()} />;
      })}
    </section>
  );
};

export default ColorList;
