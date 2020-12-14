import styled from 'styled-components'

const TitleName = styled.h1`
  color: ${({theme}) => theme.color.secondary};
  font-family: Roboto-Bold;
  font-size: 55px;
  text-shadow: 3px 0px 0px #FFA238;

  @media(max-width: 1200px) {
    font-size: 50px;
  }
  @media(max-width: 992px) {
    font-size: 40px;
  }
  
  @media(max-width: 576px) {
    font-size: 35px;
  }

  @media(max-width: 400px) {
    font-size: 50px;
  }
`

export default TitleName
