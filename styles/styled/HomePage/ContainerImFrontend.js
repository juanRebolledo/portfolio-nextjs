import styled from 'styled-components'

const ContainerImFrontend = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  width: 85%;

  @media(max-width: 400px) {
    flex-direction: column;
    height: 35%;
    margin: 0;
  }
`

export default ContainerImFrontend
