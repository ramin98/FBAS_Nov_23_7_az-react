import styled from "styled-components";

function Footer() {
  return (
    <FooterTag>
      <HeaderTag>FOOTER</HeaderTag>
    </FooterTag>
  );
}

export default Footer;

const FooterTag = styled.footer`
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
