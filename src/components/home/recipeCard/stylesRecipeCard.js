import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  background: #399eb8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5%;
  //background-color: mintcream;

  .picture {
    width: 60%;
    height: 60%;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ViewMore = styled(Link)``;
