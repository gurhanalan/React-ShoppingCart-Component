// import cartItems from "./data";

export const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
    isLoading: true,
};

export const reducer = (state, action) => {

    switch (action.type) {
        case "LOAD_DATA":
            return { ...state, cartItems: action.payload, isLoading: false };
        case "CLEAR_CART":
            return { ...state, cartItems: [], totalPrice: 0, totalItems: 0 };

        case "DELETE_ITEM":
            const newItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                cartItems: newItems,
            };


        case "ADD/REMOVE_ITEM":
            const newItems2 = state.cartItems
                .map((item) => {
                    if (item.id === action.payload.id) {
                        let newAmount;
                        if(action.payload.type === "add") {
                            newAmount = item.amount + 1;
                        } else if(action.payload.type === "remove") {
                            newAmount = item.amount - 1;
                        }
                         
                        
                        
                        return { ...item, amount: newAmount };
                        
                    }
                    return item;
                })
                .filter((item) => item.amount !== 0);
            return {
                ...state,
                cartItems: newItems2,
            };

        case "UPDATE_TOTALS":
            let { totalAmount, totalPrice } = state.cartItems.reduce(
                (total, item) => {
                    total.totalAmount += item.amount;
                    total.totalPrice += item.amount * item.price;
                    return total;
                },
                {
                    totalAmount: 0,
                    totalPrice: 0,
                }
            );

            totalPrice = parseFloat(totalPrice.toFixed(2));
            return {
                ...state,
                totalPrice: totalPrice,
                totalItems: totalAmount,
            };

        default:
            throw new Error("No matching type");
    }
};
