import styled from "styled-components";
import AddForm from "../AddForm";
import ProductList from "../Products/ProductList";

function ProductsPage() {
  return (
    <PageMain>
      <AddForm/>
      <ProductList/>
    </PageMain>
  );
}

export default ProductsPage;

const PageMain = styled.section`
  margin-bottom: auto;
  margin-top: 30px;
`;
