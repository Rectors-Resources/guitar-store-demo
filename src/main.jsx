import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";
import ProductGallery from "./components/ProductsPage/ProductGallery/ProductGallery.jsx";
import ProductPage from "./components/ProductsPage/ProductPage.jsx";
import { allProductsLoader } from "./components/ProductsPage/allProductsLoader.js";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<App />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="cart" element={<CartPage />}></Route>
      <Route path="products" element={<ProductPage/>}>
        <Route
          path=":filter"
          element={<ProductGallery />}
          loader={allProductsLoader}
        />
      </Route>
      <Route
      path="product/:id"
      element={<SingleProductPage/>}
      loader={allProductsLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
