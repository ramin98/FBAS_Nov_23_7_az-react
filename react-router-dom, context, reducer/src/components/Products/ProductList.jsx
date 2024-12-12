import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

function ProductList() {
  let [value, setValue] = useState('');

  let {productsState} = useContext(MyContext)

  let filtered = productsState.products.filter((item) => item.productName.startsWith(value))

  return (
    <ProductsSection>
      <input type="text" onInput={(ev) => setValue(ev.target.value)}/>
      <Products>
        {filtered.map((item) => (
          <ProductItem
            key={item.id}
            obj={item}
          />
        ))}
      </Products>
    </ProductsSection>
  );
}

export default ProductList;

const ProductsSection = styled.section`
  padding: 30px;
`;

const Products = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 30px;
`;
