import styled from 'styled-components'

const ContainerMyName = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: space-evenly;
  width: 100%;
  
  @media(max-width: 576px) {
    flex-direction: column;
    height: 35%;
  }
`

export default ContainerMyName
