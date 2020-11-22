import Main from 'styles/styled/Main/Main'
import Header from 'components/Header/Header'

const Layout = ({ children, handlerDarkMode }) => {
  return (
    <>    
      <Header handlerDarkMode={handlerDarkMode} />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
