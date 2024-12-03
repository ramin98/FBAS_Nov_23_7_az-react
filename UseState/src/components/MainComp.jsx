import styled from "styled-components";
import Services from "./Services/Services";
import AddForm from "./AddForm";
import { services } from "../assets/data";
import { useState } from "react";

function MainComp() {
  let [servicesArray, setServicesArray] = useState([...services])
   
  // DIGER EDIT USULU
  // let [servicesArray, setServicesArray] = useState([...services.map((item) => ({...item,open: false}))])

    return (
        <MainTag>
            <AddForm servicesArray={servicesArray} setServicesArray={setServicesArray}/>
            <HeaderTag>MAIN</HeaderTag>
            <Services servicesArray={servicesArray} setServicesArray={setServicesArray}/>
        </MainTag>
    )
}

export default MainComp

const MainTag = styled.main`
  padding: 50px;
  text-align: center;
`;

const HeaderTag = styled.h1`
  color: red;
  font-size: 60px;
  font-weight: 900;
`;