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
import ToggleButton from 'components/ToggleButton/ToggleButton'

const HomePage = ({ darkMode }) => {
  return (
    <>
      {/* <PresentationContainer>
        <InformationContainer>
          <ContainerMyName>
            <Logo darkMode={darkMode} />
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
      <AboutMe>
        <Iam>
          <Logo darkMode={darkMode} width="75" />
          <Paragraph>
            Hi! My name is José Juan Rebolledo Kamey. I am currently an Telematics engineering student,
            I'm 21 years old. I love the code and make user interfaces. My favorite lenguaje is
            JavaScript and use React to build interfaces.
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
      </AboutMe> */}
    </>
  )
}

export default HomePage
