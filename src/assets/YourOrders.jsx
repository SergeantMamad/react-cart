import { useContext } from "react";
import { CartContext } from "../cartContext";
export const YourOrders = ({dark}) => {
  const { getTotalAmount } = useContext(CartContext);
  const { products } = useContext(CartContext);
  const paycheck = products.filter((product) => product.amount >= 1);
  return (
    <div>
      <div className="w-max mx-auto my-12 text-center">
        <h1 className={`${dark ? "text-white" : "text-black"} transition-colors text-3xl`}>Total Amount:</h1>
        <h2 className={`${dark ? "text-white" : "text-black"} my-5 text-2xl`}>$ {getTotalAmount()}</h2>
      </div>
      <div className="flex justify-around">
      <div className={`p-8 w-[500px] ${dark ? "bg-[#252836]" : "bg-white"} shadow-xl max-h-[550px] overflow-y-auto rounded-md`}>
        <div className="grid grid-cols-1 gap-y-16">
          {paycheck.map((product, i) => {
            return (
              <div key={i} className="flex gap-5">
                <div className="w-28 h-32">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-md w-full h-full object-fill my-auto"
                  />
                </div>
                <div className="grid grid-cols-1 col-span-2">
                  <p className={`overflow-hidden whitespace-nowrap text-ellipsis w-56 ${dark ? "text-white" : "text-black"}`}>
                    {product.title}
                  </p>
                  <p className={`${dark ? "text-white" : "text-black"}`}>Price : ${product.price * product.amount}</p>
                  <p className={`${dark ? "text-white" : "text-black"}`}>Amount : {product.amount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`w-1/2 ${dark ? "bg-[#252836]" : "bg-white"} shadow-xl h-[550px] rounded-md p-16`}>
        <div className="flex flex-row justify-start gap-9">
          <label htmlFor="name" className={`${dark ? "text-white" : "text-black"}`}>Name:</label>
          <input name="name" className={`rounded-md ml-8 h-8 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
          <label htmlFor="lastName" className={`${dark ? "text-white" : "text-black"} ml-12`}>
            Last Name:
          </label>
          <input name="lastName" className={`rounded-md ml-8 h-8 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
        </div>
        <div className="mt-12">
          <label htmlFor="Address" className={`${dark ? "text-white" : "text-black"}`}>Address:</label>
          <input name="Address" className={`rounded-md ml-8 h-8 w-5/6 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
        </div>
        <div className="mt-12 flex flex-row justify-start gap-48">
          <div>
            <label htmlFor="state" className={`${dark ? "text-white" : "text-black"}`}>State:</label>
            <input name="state" className={`rounded-md ml-8 h-8 w-20 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
          </div>
          <div>
            <label htmlFor="city" className={`${dark ? "text-white" : "text-black"}`}>City:</label>
            <input name="city" className={`rounded-md ml-8 h-8 w-20 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
          </div>
          <div>
            <label htmlFor="zip" className={`${dark ? "text-white" : "text-black"}`}>Zip:</label>
            <input name="zip" className={`rounded-md ml-8 h-8 w-20 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
          </div>
        </div>
        <div className="flex flex-row justify-start gap-9 mt-20">
          <label htmlFor="phone" className={`${dark ? "text-white" : "text-black"}`}>Phone:</label>
          <input name="phone" className={`rounded-md ml-8 h-8 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
          <label htmlFor="email" className={`${dark ? "text-white" : "text-black"} ml-24`}>
            Email:
          </label>
          <input name="email" className={`rounded-md ml-8 h-8 px-3 ${dark ? "bg-slate-900 border border-gray-600 text-white" : "text-black bg-zinc-200 border-gray-300 border"}`} />
        </div>
        <button className="mt-20 bg-blue-400 p-2 rounded-md w-64">Check Out</button>
      </div>
      </div>
    </div>
  );
};
