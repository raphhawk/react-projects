import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from "./context";

const CartItem = ({ item }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <section className="flex flex-row mt-8">
      <img src={item.img} alt={item.title} className="w-20 mx-10" />
      <div className="flex flex-col">
        <p className="text-2xl font-bold  capitalize text-gray-600">
          {item.title}
        </p>
        <p className="text-md text-gray-500">${item.price}</p>
        <button
          type="button"
          className="text-gray-500 mr-60 hover:text-gray-800"
          onClick={() => {
            remove(item.id);
          }}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col items-center md:ml-60">
        <button
          type="button"
          className="text-3xl text-indigo-500"
          onClick={() => {
            increase(item.id);
          }}
        >
          <MdKeyboardArrowUp />
        </button>
        <p>{item.amount}</p>
        <button
          type="button"
          className="text-3xl text-indigo-500"
          onClick={() => {
            decrease(item.id);
          }}
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
