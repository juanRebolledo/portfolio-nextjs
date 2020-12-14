import Main from 'styles/styled/Main/Main'
import ToggleButton from 'components/ToggleButton/ToggleButton'
import Header from 'styles/styled/Header/Header'
import Logo from 'components/Logo'

const Layout = ({ children, handlerDarkMode }) => {
  return (
    <>
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
