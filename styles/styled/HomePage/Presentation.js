import styled from 'styled-components'

const PresentationContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 50%;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export default PresentationContainer