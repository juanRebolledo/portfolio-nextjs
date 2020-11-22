import styled from 'styled-components'

const SectionCode = styled.section`
  align-items: center;
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  height: 100%;
  justify-content: center;
  width: 50%;

  @media(max-width: 768px) {
    display: none;
  }
`

export default SectionCode
