import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/Pages/About.jsx";
import ProductsPage from "./components/Pages/ProductsPage.jsx";
import NoPage from "./components/Pages/NoPage.jsx";
import ProductPage from "./components/Pages/ProductItemPage/ProductPage.jsx";
import Home from "./components/Pages/Home.jsx";
import ProductName from './components/Pages/ProductItemPage/ProductName.jsx'
import ProductRestInfo from './components/Pages/ProductItemPage/ProductRestInfo.jsx'


const router = createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children:[
      {
        path:'about',
        element:<About/>
      },
      {
        path:'products',
        element:<ProductsPage/>
      },
      {
        path:'*',
        element:<NoPage/>
      },
      {
        path:'product-page/:id',
        element:<ProductPage/>,
        children:[
          {
            path:'product-name',
            element:<ProductName/>
          },
          {
            path:'product-restinfo',
            element:<ProductRestInfo/>
          },
        ]
      },
      {
        index: true,
        element:<Home/>
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
