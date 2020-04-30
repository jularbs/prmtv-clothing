import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;

//first param is the input selector/collection,
//second param is a function that returns the desired output of the input selector/collection
export const selectCartItems = createSelector( // <-- Memoization Selector
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + (cartItem.quantity * cartItem.price),
            0
        )
)