import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";
import { ArrowLeftCircleIcon,SunIcon,MoonIcon } from "@heroicons/react/24/outline";
import { YourOrders } from "./YourOrders";
export const PayCheck = () => {
  const {dark,setDark} = useContext(CartContext)
  return (
    <div style={dark ? {backgroundColor: "#1f1d2b"} : {backgroundColor: "#f3f3f8" }} className="h-screen">
      <div className="bg-black h-12 py-2 sticky top-0 left-0 z-10">
        <div className="max-w-[88rem] mx-auto flex justify-between">
        {dark ? <SunIcon className="w-7 h-7 text-white cursor-pointer" onClick={()=>setDark(!dark)}/> : <MoonIcon className="w-7 h-7 text-white cursor-pointer" onClick={()=>setDark(!dark)}/>}
          <Link to="/">
            <ArrowLeftCircleIcon className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
      <YourOrders dark={dark}/>
    </div>
  );
};
