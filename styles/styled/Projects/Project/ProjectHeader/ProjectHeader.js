import styled from 'styled-components'

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export default ProjectHeader
