import styled from "styled-components";
import { useRef, useState } from "react";
import { products } from "../assets/data";
import { Outlet} from "react-router-dom";


function MainComponent() {
  let [productsArray, setProductsArray] = useState([...products]);
  let product = useRef(null);

  return (
    <PageMain>
      <Outlet context={{productsArray, setProductsArray,product}}/>
    </PageMain>
  );
}

export default MainComponent;

const PageMain = styled.main`
  margin-bottom: auto;
  margin-top: 30px;
`;
