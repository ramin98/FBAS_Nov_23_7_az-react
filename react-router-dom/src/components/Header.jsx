import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  let navigate = useNavigate()
  return (
    <PageHeader>
      <Headline>Header</Headline>
      <ul>
        <li><button onClick={() => navigate('/')}>HOME</button></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/products'>PRODUCTS</Link></li>
      </ul>
    </PageHeader>
  );
}

export default Header;

const PageHeader = styled.header`
  background-color: black;
  padding: 40px;
  color:white;
`;

const Headline = styled.h1`
  color: white;
`;
