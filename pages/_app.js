import { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/Theme/theme'
import 'styles/index.css'
import 'styles/Code/code.css'

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <h1>Loading theme</h1>

  return (
    <>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Component {...pageProps} darkMode={darkMode} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
