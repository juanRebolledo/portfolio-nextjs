import Code from 'components/Code'
import Logo from 'components/Logo'
import AboutMe from 'styles/styled/HomePage/AboutMe'
import ContainerImFrontend from 'styles/styled/HomePage/ContainerImFrontend'
import ContainerMyName from 'styles/styled/HomePage/ContainerMyName'
import Iam from 'styles/styled/HomePage/Iam'
import Paragraph from 'styles/styled/Paragraph/Paragraph'
import InformationContainer from 'styles/styled/HomePage/InformationContainer'
import PresentationContainer from 'styles/styled/HomePage/Presentation'
import SectionCode from 'styles/styled/SectionCode/SectionCode'
import Subtitle from 'styles/styled/Subtitle/Subtitle'
import TitleName from 'styles/styled/TitleName/TitleName'
import MyImages from 'styles/styled/HomePage/MyImages'
import ImageContainer from 'styles/styled/HomePage/ImageContainer'
import Projects from 'styles/styled/Projects/Projects'
import Project from 'styles/styled/Projects/Project/Project'
import ProjectTitle from 'styles/styled/Projects/Project/ProjectHeader/ProjectTitle'
import ProjectHeader from 'styles/styled/Projects/Project/ProjectHeader/ProjectHeader'
import ProjectInfo from 'styles/styled/Projects/Project/ProjectHeader/ProjectInfo'
import ProjectSubtitle from 'styles/styled/Projects/Project/ProjectHeader/ProjectSubtitle'
import ProjectLink from 'styles/styled/Projects/Project/ProjectHeader/ProjectLink'
import ProjectLinks from 'styles/styled/Projects/Project/ProjectHeader/ProjectLinks'
import ProjectImages from 'styles/styled/Projects/Project/ProjectImages/ProjectImages'

const HomePage = ({ darkMode }) => {
  return (
    <>
      <PresentationContainer>
        <InformationContainer>
          <ContainerMyName>
            <Logo darkMode={darkMode} width="100px" />
            <TitleName>Hi! I'm Juan </TitleName>
          </ContainerMyName>
          <ContainerImFrontend>
            <Subtitle>
              I'm a Front End Developer
            </Subtitle>
            <img src="/images/Img-Juan.png" />
          </ContainerImFrontend>
        </InformationContainer>
      </PresentationContainer>
      <SectionCode>
        <Code darkMode={darkMode} />
      </SectionCode>
      <Projects>
        <Project>
          <ProjectHeader>
            <ProjectInfo>
              <ProjectTitle>Marvel Application</ProjectTitle>
              <ProjectSubtitle>
                Application developed with React JS and Marvel API. You can explore Characters and Comics of Marvel Universe and some creators of comics
              </ProjectSubtitle>
            </ProjectInfo>
            <ProjectLinks>
              <ProjectLink href="https://github.com/juanRebolledo/marvel-application" target="_blank">Repositorio</ProjectLink>
              <ProjectLink href="https://marvel-application.vercel.app/" target="_blank">Aplicación</ProjectLink>
            </ProjectLinks>
          </ProjectHeader>
          <ProjectImages>
            <img alt="Imagen relacionada al proyecto marvel" src="/images/Projects/mv/mv-1.png" />
            <img alt="Imagen relacionada al proyecto marvel" src="/images/Projects/mv/mv-2.png" />
            <img alt="Imagen relacionada al proyecto marvel" src="/images/Projects/mv/mv-3.png" />
          </ProjectImages>
        </Project>
        <Project>
          <ProjectHeader>
            <ProjectInfo>
              <ProjectTitle>Social Network</ProjectTitle>
              <ProjectSubtitle>
                The best social network for Gamers around the world!
              </ProjectSubtitle>
            </ProjectInfo>
            <ProjectLinks>
              <ProjectLink href="https://github.com/juanRebolledo/social-gamer" target="_blank">Repositorio</ProjectLink>
              <ProjectLink href="http://socialgamernetwork2.000webhostapp.com/" target="_blank">Aplicación</ProjectLink>
            </ProjectLinks>
          </ProjectHeader>
          <ProjectImages>
            <img alt="Imagen relacionada al proyecto social gamer" src="/images/Projects/sn/sg-1.png" />
            <img alt="Imagen relacionada al proyecto social gamer" src="/images/Projects/sn/sg-2.png" />
            <img alt="Imagen relacionada al proyecto social gamer" src="/images/Projects/sn/sg-3.png" />
            <img alt="Imagen relacionada al proyecto social gamer" src="/images/Projects/sn/sg-4.png" />
          </ProjectImages>
        </Project>
        <Project>
          <ProjectHeader>
            <ProjectInfo>
              <ProjectTitle>Point of Sale</ProjectTitle>
              <ProjectSubtitle>
                Application developed with React JS, Firebase, Bootsrapt and Scss. This app allow you to manage your stores, providers and give you proffits of your sales.
              </ProjectSubtitle>
            </ProjectInfo>
            <ProjectLinks>
              <ProjectLink href="https://point-of-sale-git-main.juanrebolledo.vercel.app/admin/inicio" target="_blank">Aplicación</ProjectLink>
            </ProjectLinks>
          </ProjectHeader>
          <ProjectImages>
            <img alt="Imagen relacionada al proyecto point of sale" src="/images/Projects/ps/ps-1.png" />
            <img alt="Imagen relacionada al proyecto point of sale" src="/images/Projects/ps/ps-2.png" />
            <img alt="Imagen relacionada al proyecto point of sale" src="/images/Projects/ps/ps-3.png" />
            <img alt="Imagen relacionada al proyecto point of sale" src="/images/Projects/ps/ps-4.png" />
          </ProjectImages>
        </Project>
      </Projects>
      <AboutMe>
        <Iam>
          <Logo darkMode={darkMode} width="75" />
          <Paragraph>
            I am currently an Telematics engineering student. I'm 21 years old. I love the code and make user interfaces. My favorite tool is
            JavaScript and I use React to build interfaces.
          </Paragraph>
          <MyImages>
            <ImageContainer>
              <img src="/images/friends.jpg" />
            </ImageContainer>
            <ImageContainer>
              <img src="/images/juanRebolledo.jpg" />
            </ImageContainer>
          </MyImages>
        </Iam>
      </AboutMe>
    </>
  )
}

export default HomePage
