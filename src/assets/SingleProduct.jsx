import { useContext } from "react";
import { CartContext } from "../cartContext";
export const SingleProduct = ({ product }) => {
  const { id, title, price,image } = product;
  const { dispatch,dark } = useContext(CartContext);
  return (
    <div className={`w-80 h-[400px] ${dark ? "bg-[#252836]" : "bg-white"} mb-5 rounded-md text-center shadow-2xl`}>
      <img src={image} width="228px" className="mx-auto mt-10 rounded-md object-scale-down w-52 h-52" />
      <h2 className={`mt-5 overflow-hidden whitespace-nowrap text-ellipsis inline-block w-56 mx-auto ${dark ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      <h3 className={`${dark ? "text-white" : "text-black"}`}>${price}</h3>
      <button
        className="mt-4 bg-cyan-900 text-white w-48 rounded-md backdrop-blur-2xl h-9"
        onClick={() => {
          dispatch({ type: "addToCart", id: id });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};
