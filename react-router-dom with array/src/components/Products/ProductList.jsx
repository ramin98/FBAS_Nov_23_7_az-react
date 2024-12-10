import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList({setProductsArray, productsArray,product}) {
  let [value, setValue] = useState('');

  let filtered = productsArray.filter((item) => item.productName.startsWith(value))

  return (
    <ProductsSection>
      <input type="text" onInput={(ev) => setValue(ev.target.value)}/>
      <Products>
        {filtered.map((item) => (
          <ProductItem
            key={item.id}
            obj={item}
            setProductsArray={setProductsArray}
            productsArray={productsArray}
            product={product}
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
