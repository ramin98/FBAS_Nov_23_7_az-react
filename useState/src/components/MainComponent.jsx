import styled from "styled-components";
import ProductList from "./Products/ProductList";
import AddForm from "./AddForm";
import { useState } from "react";
import { products } from "../assets/data";

function MainComponent() {
  let tagColor = 'red'
  let tagFont = '60px'
  let [productsArray, setProductsArray] = useState([...products])

    
  return (
    <PageMain>
      <Headline font={tagFont} color={tagColor}>MAIN</Headline>
      <AddForm productsArray={productsArray} setProductsArray={setProductsArray}/>
      <ProductList productsArray={productsArray} setProductsArray={setProductsArray}/>
    </PageMain>
  );
}

export default MainComponent;

const PageMain = styled.main`
  margin-bottom: auto;
  margin-top: 30px;
`;

const Headline = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.font};
`;
