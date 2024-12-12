import styled from "styled-components";
import ProductsPage from "./Pages/ProductsPage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductItemPage/ProductPage";
import NoPage from "./Pages/NoPage";
import ProductName from "./Pages/ProductItemPage/ProductName";
import ProductRestInfo from "./Pages/ProductItemPage/ProductRestInfo";

function MainComponent() {
  return (
    <PageMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="product-page/:id" element={<ProductPage />}>
          <Route path="product-name" element={<ProductName />} />
          <Route path="product-restinfo" element={<ProductRestInfo />} />
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
