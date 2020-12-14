import styled from 'styled-components'

const InformationContainer = styled.div`
  height: 60%;
  width: 80%;
  
  @media(max-width: 576px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 90%;
  }
`
export default InformationContainer
