import styled from 'styled-components'

const MyImages = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 40%;
  width: 60%;

  img {
    max-width: 100%;
  }

  
  @media(max-width: 1100px) {
    width: 90%;
  }

  @media(max-width: 768px) {
    width: 90%;
  }
  
  @media(max-width: 576px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
    width: 100%;
  }
`

export default MyImages
