import { useState, useContext } from "react";
import { CartContext } from "./cartContext";
import { SingleProduct } from "./assets/SingleProduct";
import { Menu } from "./assets/Menu";
import { SunIcon,MoonIcon } from "@heroicons/react/24/outline";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const { products,setDark,dark } = useContext(CartContext);
  return (
    <div style={dark ? {backgroundColor: "#1f1d2b"} : {backgroundColor: "#f3f3f8" }}>
      <div className="bg-black h-12 py-2 sticky top-0 left-0 z-10">
        <Menu
          openMenu={openMenu}
          products={products.filter((product) => product.amount >= 1)}
        />
        <div className="max-w-[88rem] mx-auto flex justify-between">
          {dark ? <SunIcon className="w-7 h-7 text-white cursor-pointer" onClick={()=>setDark(!dark)}/> : <MoonIcon className="w-7 h-7 text-white cursor-pointer" onClick={()=>setDark(!dark)}/>}
          <h1
            className="text-white text-2xl cursor-pointer inline-block select-none"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 auto-cols-auto px-28 items-center p-5">
        {products.map((product, index) => {
          return (
            <SingleProduct
              key={index}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
