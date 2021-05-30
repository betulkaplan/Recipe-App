import styled from 'styled-components';
export default styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ;
  justify-content: center;
  align-items: center;
  background-image: url('https://picsum.photos/1600/900');
  background-size: cover;
`;

export const LoginForm = styled.form`
  border: 3px solid white;
  padding: 50px;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 234, 211, 0.5);
  border-radius: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;

export const LoginPic = styled.img`
  max-width: 100px;
  margin-bottom: 20px;
`;
