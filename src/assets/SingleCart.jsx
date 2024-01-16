import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "../cartContext";
export const SingleCart = ({ product }) => {
  const { id, title, price, amount,image } = product;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="flex border w-full h-28 border-gray-400 rounded-md bg-gray-200 p-3 transition opacity-100 ease-in duration-100 overflow-visible">
      <div className="w-28 flex justify-center">
        <img
          src={image}
          alt=""
          className="rounded-md border-2 border-gray-600 object-scale-down"
        />
      </div>
      <div className="w-1/2 ml-10 grid grid-cols-1">
        <p className="whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </p>
        <p>${price}</p>
      </div>
      <div className="w-1/2 ml-10 grid grid-cols-1 gap-1">
        <ArrowUpCircleIcon className="ml-20 w-6 h-6" onClick={()=>dispatch({type:"addToButton",id:id,switch:"up"})}/>
        <input
          type="number"
          name=""
          id=""
          className="bg-slate-300 h-6 w-6 ml-20 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
          value={amount}
          onChange={(e) =>
            dispatch({
              type: "inputChange",
              id: id,
              payload: parseInt(e.target.value),
            })
          }
        />
        <ArrowDownCircleIcon className="ml-20 w-6 h-6" onClick={()=>dispatch({type:"addToButton",id:id,switch:"down"})}/>
      </div>
    </div>
  );
};
