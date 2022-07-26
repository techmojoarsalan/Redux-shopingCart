import * as actionTypes from "./actionType"
const initialState = {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart"))  ||[],
    isLoading: false,
    currentItem: null,
   
}
export const shopReucer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                products: action.payload,
                isLoading: true,
            }

        case actionTypes.ADD_CART:
            const item = state.products.find((prod) => prod.id === action.payload);
            const inCart = state.cart.find((item) =>
                item.id === action.payload ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
                   
                    
            }
        case actionTypes.REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state
    }
}
