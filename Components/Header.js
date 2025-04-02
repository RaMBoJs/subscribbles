import styled from "styled-components";

function Header() {
  return <StyledHeader>Transactions List</StyledHeader>;
}

const StyledHeader = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 60px;
`;
export default Header;
