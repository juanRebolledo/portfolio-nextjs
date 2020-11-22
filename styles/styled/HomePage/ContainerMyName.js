import styled from 'styled-components'

const ContainerMyName = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: space-between;
  width: 100%;
  
  @media(max-width: 576px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export default ContainerMyName
