import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };

    case REMOVE:
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return {
        ...state,
        cart: newCart,
      };

    case INCREASE:
      const newIncAmountCart = new Map(state.cart);
      const incItem = newIncAmountCart.get(action.payload.id);
      const newIncItem = { ...incItem, amount: incItem.amount + 1 };
      newIncAmountCart.set(action.payload.id, newIncItem);
      return { ...state, cart: newIncAmountCart };

    case DECREASE:
      const newDecAmountCart = new Map(state.cart);
      const decItem = newDecAmountCart.get(action.payload.id);
      if (decItem.amount === 1) {
        newDecAmountCart.delete(action.payload.id);
        return { ...state, cart: newDecAmountCart };
      }
      const newDecItem = { ...decItem, amount: decItem.amount - 1 };
      newDecAmountCart.set(action.payload.id, newDecItem);
      return { ...state, cart: newDecAmountCart };

    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      const newFetchCart = new Map(
        action.payload.cart.map((item) => [item.id, item])
      );
      return { ...state, cart: newFetchCart, loading: false };
    default:
      throw new Error(`no matching action type: ${action.type}`);
  }
};
