import styled from 'styled-components'

const Iam = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  width: 80%;

  
  @media(max-width: 768px) {
    height: 95%;
    justify-content: space-around;
    width: 90%;
  }
`

export default Iam
