import React, { useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import { reducer, initialState } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        const response = await fetch(url);
        const cartData = await response.json();
        dispatch({ type: "LOAD_DATA", payload: cartData });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: "UPDATE_TOTALS" });
    }, [cart.cartItems]);

    const addItem = (id) => {
        dispatch({ type: "ADD/REMOVE_ITEM", payload: { id, type: "add" } });
    };

    const removeItem = (id) => {
        dispatch({ type: "ADD/REMOVE_ITEM", payload: { id, type: "remove" } });
    };
    return (
        <AppContext.Provider value={{ ...cart, dispatch, addItem, removeItem }}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
