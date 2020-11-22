import styled from 'styled-components'

const A = styled.a`
  color: ${({theme}) => theme.color.primary};
  cursor: pointer;
  font-family: Lato-Bold;
  font-size: ${({theme}) => theme.fontSizes.links};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${({theme}) => theme.color.primary};
  }
`

export default A