import styled from 'styled-components'

const AboutMe = styled.section`
  align-items: flex-start;
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  height: calc(100vh - 70px);
  justify-content: center;
  transition: all ease-in 0.3s;
  width: 100%;
`

export default AboutMe
