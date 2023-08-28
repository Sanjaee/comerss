import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404";
import ProductsPage from "./Pages/products";
import DetailProduct from "./Pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContexProvider from "./context/DarkMode";
import { TotalPirceProvider } from "./context/TotalPriceContext";
import { Link } from "react-router-dom";
import Button from "./Components/Elements/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col justify-center min-h-screen items-center bg-slate-600 ">
        <h1 className="font-bold text-3xl font-sans my-5 text-white hover:text-black">EZA STORE</h1>
        <Button classname="bg-blue-600 hover:text-black" type="button">
          <Link to="/login">GET STARTED</Link>
        </Button>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },

  {
    path: "/product/:id",
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContexProvider>
        <TotalPirceProvider>
          <RouterProvider router={router} />
        </TotalPirceProvider>
      </DarkModeContexProvider>
    </Provider>
  </React.StrictMode>
);
