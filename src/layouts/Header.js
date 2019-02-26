import styled from 'styled-components';


const Header = styled.nav`
  position: relative;
  margin: ${props => props.margin};
  min-height: ${props => props.lineHeight}px;
  
  
`;

Header.defaultProps = {
 margin: '10px 0px 10px 0px',
  lineHeight: 78,
};

export default Header;
