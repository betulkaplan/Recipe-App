import styled from 'styled-components';

export default styled.nav`
  background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Logo = styled.span`
  font-size: 30px;
`;

export const Navigator = styled.ul`
  font-size: 15px;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-left: 20px;
`;
