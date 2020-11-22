import styled from 'styled-components'

const Header = styled.header`
  align-items: center;
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  height: 70px;
  position: sticky;
  top: 0;
`

export default Header