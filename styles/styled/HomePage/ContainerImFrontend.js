import styled from 'styled-components'

const ContainerImFrontend = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 400px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
  }
`

export default ContainerImFrontend
