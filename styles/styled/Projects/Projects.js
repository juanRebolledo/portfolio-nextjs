import styled from 'styled-components'

const Projects = styled.section`
  background: ${({theme}) => theme.bg.primary};
  display: flex;
  flex-direction: column;
  padding: 40px 25px;
  width: calc(100% - 50px);
`

export default Projects
