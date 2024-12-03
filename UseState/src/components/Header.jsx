import styled from "styled-components";

function Header() {
    return (
        <MainHeaderTag>
            <HeaderTag>HEADER</HeaderTag>
        </MainHeaderTag>
    )
}

export default Header

const MainHeaderTag = styled.footer`
  padding: 50px;
  background-color: black;
  color: white;
  text-align: center;
`;

const HeaderTag = styled.h1`
  color: red;
  font-size: 60px;
  font-weight: 900;
`;