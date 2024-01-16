import { createContext } from "react";
import { useEffect, useState, useReducer } from "react";
export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [dark,setDark] = useState(false)
  const reducer = (state, action) => {
    switch (action.type) {
      case "addToCart":
        setProducts((prevProduct) =>
          prevProduct.map((product) => {
            if (product.id == action.id) {
              return {
                ...product,
                amount: product.amount + 1,
              };
            } else
              return {
                ...product,
              };
          })
        );
        break;
      case "inputChange":
        setProducts((prevProduct) =>
          prevProduct.map((product) => {
            if (product.id == action.id) {
              return {
                ...product,
                amount: action.payload,
              };
            } else
              return {
                ...product,
              };
          })
        );
        break;
      case "addToButton":
        setProducts((prevProduct) =>
          prevProduct.map((product) => {
            if (product.id == action.id) {
              return {
                ...product,
                amount:
                  action.switch == "up"
                    ? product.amount + 1
                    : product.amount - 1,
              };
            } else
              return {
                ...product,
              };
          })
        );
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, products);

  const getTotalAmount = () => {
    let total = 0;
    products.map((product) => {
      if (product.amount >= 1) {
        total += product.amount * product.price;
      }
    });
    return total;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const setProductAmount = json.map((product) => ({
          ...product,
          amount: 0,
        }));
        setProducts(setProductAmount);
      });
  }, []);

  return (
    <CartContext.Provider
      value={{ products, setProducts, dispatch, getTotalAmount,setDark,dark }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
