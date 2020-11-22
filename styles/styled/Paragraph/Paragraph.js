import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${({theme}) => theme.color.primary};
  font-size: 25px;
  font-family: Roboto-Medium;
  text-align: center;

  
  @media(max-width: 576px) {
    font-size: 15px;
  }
`

export default Paragraph
