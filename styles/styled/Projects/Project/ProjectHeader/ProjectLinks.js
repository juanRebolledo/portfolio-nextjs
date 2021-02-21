import styled from 'styled-components'

const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 30%;

  @media(max-width: 768px) {
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }
`

export default ProjectLink
