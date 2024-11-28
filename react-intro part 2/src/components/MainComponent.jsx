import styled from "styled-components";
import ProductList from "./Products/ProductList";

function MainComponent() {
  let tagColor = 'red'
  let tagFont = '60px'
    
  return (
    <PageMain>
      <Headline font={tagFont} color={tagColor}>MAIN</Headline>
      <ProductList/>
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
