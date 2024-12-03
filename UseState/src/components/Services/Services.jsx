import styled from "styled-components";
import ServicesItem from "./ServicesItem";

function Services({servicesArray, setServicesArray}) {
  const sendFunc = (text) => {
    console.log(text);
  };

  return (
    <ServicesSection>
      <button onClick={(ev) => sendFunc(ev.target)}>SEND</button>
      <HeaderTag>Services</HeaderTag>
      <ServicesList>
        {servicesArray.map((item) => (
          <ServicesItem
            key={item.id}
            servicesArray={servicesArray}
            setServicesArray={setServicesArray}
            obj={item}
          />
        ))}
      </ServicesList>
    </ServicesSection>
  );
}

export default Services;

const ServicesSection = styled.section`
  margin-top: 30px;
`;

const HeaderTag = styled.h1``;

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 30px;
  gap: 30px 30px;

  @media (max-width: 630px) {
    & {
      grid-template-columns: auto;
    }
  }
`;
