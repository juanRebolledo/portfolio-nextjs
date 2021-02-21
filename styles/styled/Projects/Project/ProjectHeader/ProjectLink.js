import styled from 'styled-components'

const ProjectLink = styled.a`
  background: ${({ theme }) => theme.bg.primary };
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.secondary};
  font-family: Roboto-Medium;
  padding: 5px 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  width: 150px;

  &:hover {
    background: ${({ theme }) => theme.color.secondary };
    color: ${({ theme }) => theme.bg.primary};
  }
`

export default ProjectLink
