import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl uppercase">your bag</h1>
        <h4 className="mt-20">is currently empty</h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-6xl uppercase">your bag</h1>
      <section>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem item={item} key={id} />;
        })}
        <hr className="w-2/2 ml-10 mt-10 border" />
        <div className="flex flex-row mt-10">
          <h4 className=" grow text-2xl">Total</h4>
          <p className="text-xl bg-purple-600 text-white px-2 rounded-md">
            ${totalCost.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="text-blue-800 bg-gray-400 px-3 rounded-md hover:bg-gray-500 hover:text-white"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
