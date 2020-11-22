import styled from 'styled-components'

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: 426px) {
    flex-direction: column;
    height: 100vh;
    top: 0;
    right: 100%;
    position: absolute;
  }
`

export default Nav