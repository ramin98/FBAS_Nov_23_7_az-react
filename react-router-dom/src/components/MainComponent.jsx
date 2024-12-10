import styled from "styled-components";
import { useRef, useState } from "react";
import { products } from "../assets/data";
import ProductsPage from "./Pages/ProductsPage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductItemPage/ProductPage";
import NoPage from "./Pages/NoPage";
import ProductName from "./Pages/ProductItemPage/ProductName";
import ProductRestInfo from "./Pages/ProductItemPage/ProductRestInfo";

function MainComponent() {
  let [productsArray, setProductsArray] = useState([...products]);
  let product = useRef(null);

  return (
    <PageMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              productsArray={productsArray}
              setProductsArray={setProductsArray}
              product={product}
            />
          }
        />
        <Route path="product-page/:id" element={<ProductPage product={product} productsArray={productsArray}/>}>
          <Route path="product-name" element={<ProductName product={product}/>} />
          <Route path="product-restinfo" element={<ProductRestInfo product={product}/>} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </PageMain>
  );
}

export default MainComponent;

const PageMain = styled.main`
  margin-bottom: auto;
  margin-top: 30px;
`;
