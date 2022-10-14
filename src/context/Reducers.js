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

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE": {
      return { ...state, sort: action.payload };
    }
    case "OUT_OF_STOCK": {
      return { ...state, byStock: !state.byStock };
    }
    case "RATING": {
      return { ...state, byRating: action.payload };
    }
    case "FAST_DELIVERY": {
      return { ...state, byFastDelivery: !state.byFastDelivery };
    }
    case "CLEAR": {
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    }
    case "SEARCH": {
      return { ...state, searchQuery: action.payload };
    }
    default:
      return state;
  }
};
