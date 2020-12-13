import Main from 'styles/styled/Main/Main'
import ToggleButton from 'components/ToggleButton/ToggleButton'

const Layout = ({ children, handlerDarkMode }) => {
  return (
    <>
      <ToggleButton handlerDarkMode={handlerDarkMode} />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
