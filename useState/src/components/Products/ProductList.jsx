import styled from "styled-components";
import ProductItem from "./ProductItem";

function ProductList({setProductsArray, productsArray}) {
   
  return (
    <ProductsSection>
      <Products>
        {/* <ProductItem active productName='PAPAQ 1' productDescription='QARA 1'/>
                <ProductItem active productName='PAPAQ 2' productDescription='QARA 2'/>
                <ProductItem active productName='PAPAQ 3' productDescription='QARA 3'/>
                <ProductItem active productName='PAPAQ 4' productDescription='QARA 4'/>
                <ProductItem active productName='PAPAQ 5' productDescription='QARA 5'/>
                <ProductItem active productName='PAPAQ 6' productDescription='QARA 6'/>
                <ProductItem active productName='PAPAQ 7' productDescription='QARA 7'/>
                <ProductItem active productName='PAPAQ 8' productDescription='QARA 8'/>
                <ProductItem active productName='PAPAQ 9' productDescription='QARA 9'/> */}
        {productsArray.map((item) => (
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
