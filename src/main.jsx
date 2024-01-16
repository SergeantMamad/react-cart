import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PayCheck } from "./assets/PayCheck";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { CartContextProvider } from "./cartContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path="/" />
      <Route element={<PayCheck />} path="/paycheck" />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);
