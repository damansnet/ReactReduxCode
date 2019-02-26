import styled from 'styled-components';



const Container = styled.div`

  padding: 0 16px;
  max-width: 100%;
  margin: 0 auto;
  width: ${props => props.wide && '80%'};
`;

export default Container;
