import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled.nav`
  background: rgb(0, 234, 211);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  font-size: 20px;
  cursor: pointer;
`;

export const Navigator = styled.ul`
  font-size: 15px;
`;

export const Menulink = styled(Link)`
  margin-left: 10px;
  //text-decoration: ${({ isOpen }) => (isOpen ? 'none' : 'line-through')};
`;
