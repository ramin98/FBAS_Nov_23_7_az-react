import styled from "styled-components";

function Header() {
  return (
    <PageHeader>
      <Headline>Header</Headline>
    </PageHeader>
  );
}

export default Header;

const PageHeader = styled.header`
  background-color: black;
  padding: 40px;
`;

const Headline = styled.h1`
  color: white;
`;
