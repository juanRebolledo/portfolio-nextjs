import styled from 'styled-components'

const Subtitle = styled.h2`
  color: ${({theme}) => theme.color.third};
  font-family: Lato-Bold;
  font-size: 40px;

  @media(max-width: 1100px) {
    font-size: 25px;
  }
  @media(max-width: 768px) {
    font-size: 30px;
  }
  
  @media(max-width: 400px) {
    font-size: 30px;
    text-align: center;
  }
`

export default Subtitle
