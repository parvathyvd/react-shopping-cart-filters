export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((car) =>
          car.id === action.payload.id
            ? (car.qty = action.payload.qty)
            : car.qty
        ),
      };

    default:
      return state;
  }
};
