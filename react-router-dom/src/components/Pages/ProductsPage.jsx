import styled from "styled-components";
import AddForm from "../AddForm";
import ProductList from "../Products/ProductList";

function ProductsPage({ productsArray, setProductsArray,product }) {
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
