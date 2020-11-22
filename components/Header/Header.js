import Link from 'next/link'
import Header from 'styles/styled/Header/Header'
import Nav from 'styles/styled/Header/Nav'
import A from 'styles/styled/Header/A'
import ToggleButton from 'components/ToggleButton/ToggleButton'

const HeaderApp = ({handlerDarkMode}) => (
  <Header>
    <Nav>
      <Link href="/work">
        <A>Work</A>
      </Link>
      <Link href="/blog" as="/blog">
        <A>Blog</A>
      </Link>
      <Link href="/contact">
        <A>Contact</A>
      </Link>
    </Nav>
    <ToggleButton handlerDarkMode={handlerDarkMode} />
  </Header>
) 

export default HeaderApp
