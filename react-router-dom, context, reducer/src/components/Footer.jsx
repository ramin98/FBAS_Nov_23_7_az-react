import styled from "styled-components";

function Footer() {
    return(
        <PageFooter>
            <Headline>Footer</Headline>
        </PageFooter>
    )
}

export default Footer

const PageFooter = styled.footer`
  background-color: black;
  padding: 40px;
`;

const Headline = styled.h1`
  color: white;
`;
