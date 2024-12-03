import styled from "styled-components";

function ProductItem(props) {

  return (
    <ProductsLi>
      {props.obj.active && (
        <>
          <ProductName>{props.obj.productName}</ProductName>
          <ProductDescription>{props.obj.productDescription}</ProductDescription>
          <ProductPrice>10 azn</ProductPrice>
        </>
      )}
      <HasInStock>{props.obj.active ? "HAS IN STOCK" : "HAS NOT IN STOCK"}</HasInStock>
    </ProductsLi>
  );
}

export default ProductItem;

const ProductsLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
`;

const ProductName = styled.h3``;
const ProductDescription = styled.p``;

const ProductPrice = styled.span``;

const HasInStock = styled.span``;
