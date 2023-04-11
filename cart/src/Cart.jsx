import cartItems from "./data";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Cart = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-6xl uppercase">your bag</h1>
      <section>
        {cartItems.map((item) => {
          return (
            <section className="flex flex-row mt-8">
              <img src={item.img} alt={item.title} className="w-20 mx-10" />
              <div className="flex flex-col">
                <p className="text-2xl font-bold  capitalize text-gray-600">
                  {item.title}
                </p>
                <p className="text-md text-gray-500">${item.price}</p>
                <button type="button" className="text-gray-500 mr-60">
                  remove
                </button>
              </div>
              <div className="flex flex-col items-center md:ml-60">
                <button type="button" className="text-3xl text-indigo-500">
                  <MdKeyboardArrowUp />
                </button>
                <p>0</p>
                <button type="button" className="text-3xl text-indigo-500">
                  <MdKeyboardArrowDown />
                </button>
              </div>
            </section>
          );
        })}
        <hr className="w-2/2 ml-10 mt-10 border" />
        <div className="flex flex-row mt-10">
          <h4 className=" grow text-2xl">Total</h4>
          <p className="text-xl bg-purple-600 text-white px-2 rounded-md">
            $35425.132
          </p>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="text-blue-800 bg-gray-400 px-3 rounded-md hover:bg-gray-500 hover:text-white"
          >
            Clear Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
