import styled from 'styled-components'

const Main = styled.main`
  align-items: center;
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  transition: all ease-in 0.3s;
  width: 100%;
`

export default Main
