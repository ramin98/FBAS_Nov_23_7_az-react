import styled from "styled-components";
import AddForm from "../AddForm";
import ProductList from "../Products/ProductList";
import { useOutletContext } from "react-router-dom";

function ProductsPage() {

  let { productsArray, setProductsArray,product } = useOutletContext()
  return (
    <PageMain>
      <AddForm
        productsArray={productsArray}
        setProductsArray={setProductsArray}
      />
      <ProductList
        productsArray={productsArray}
        setProductsArray={setProductsArray}
        product={product}
      />
    </PageMain>
  );
}

export default ProductsPage;

const PageMain = styled.section`
  margin-bottom: auto;
  margin-top: 30px;
`;
