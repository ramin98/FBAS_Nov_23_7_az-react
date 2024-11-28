import styled from "styled-components";

function ProductItem({productName, productDescription, active}) {
    console.log(active)
    return(
        <ProductsLi>
            {active && <><ProductName>{productName}</ProductName>
            <ProductDescription>{productDescription}</ProductDescription>
            <ProductPrice>10 azn</ProductPrice></>}
            <HasInStock>{active ? 'HAS IN STOCK' : 'HAS NOT IN STOCK'}</HasInStock>
        </ProductsLi>
    )
}

export default ProductItem

const ProductsLi = styled.li`
  display:flex;
  flex-direction:column;
  gap: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
`;

const ProductName = styled.h3`

`;
const ProductDescription = styled.p`

`;

const ProductPrice= styled.span`

`;

const HasInStock= styled.span`

`;
