import styled from 'styled-components'

const Main = styled.main`
  align-items: center;
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  height: calc(100% - 70px);
  flex-wrap: wrap;
  width: 100%;
`

export default Main
