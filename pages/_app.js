import { useEffect, useState } from 'react'
import 'styles/index.css'
import 'styles/Code/code.css'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/Theme/theme'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlerDarkMode = () => {
    setDarkMode(!darkMode)
  }

  if (!mounted) return <h1>Loading theme</h1>

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Component {...pageProps} handlerDarkMode={handlerDarkMode} darkMode={darkMode} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
