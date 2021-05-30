import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => (props.theme === 'sugar' ? 'pink' : 'gray')};
  font-family: ${(props) => (props.theme === 'sugar' ? 'Arial' : 'Times')};
`;
