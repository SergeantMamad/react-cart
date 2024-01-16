import { SingleCart } from "./singleCart";
import { useContext } from "react";
import { CartContext } from "../cartContext";
import { Link } from "react-router-dom";
export const Menu = ({ openMenu, products }) => {
let total = products.length
const {getTotalAmount} = useContext(CartContext)
  if (products.length === 0) {
    return (
      <div
        className={`flex bg-gray-200 w-[500px] fixed h-96 top-14 right-10 rounded-md justify-center items-center transition-opacity ease-in duration-500 ${
          openMenu ? "opacity-100 visible" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl">You currently have no items</h1>
      </div>
    );
  }

  return (
    <div
      style={{height: (total*132)+'px'}}
      className={`flex flex-col bg-gray-200 w-[450px] fixed top-14 right-10 rounded-md transition-all ease-in p-4 gap-5 duration-200 overflow-y-auto max-h-[650px] ${
        openMenu ? "opacity-100 visible" : "opacity-0"
      }`}
    >
      {products.map((product, i) => (
        <SingleCart key={i} product={product} />
      ))}
    <div className="flex">
    <Link to="/paycheck"><button className="bg-cyan-800 text-white w-28 rounded-md shadow-xl p-1">Paycheck</button></Link>
    <h1 className="ml-auto">Total : ${getTotalAmount()}</h1>
    </div>
    </div>
  );
};
