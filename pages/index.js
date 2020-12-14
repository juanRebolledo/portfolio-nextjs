import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import ContainerApp from 'styles/styled/ContainerApp/ContainerApp'
import HomePage from 'views/Home/HomePage'

const Home = ({darkMode, handlerDarkMode}) => (
  <ContainerApp>
    <Head>
      <title>Juan Rebolledo</title>
      <link rel="shortcut icon" href="/favicon.jpg" />
    </Head>
    <Layout handlerDarkMode={handlerDarkMode}>
      <HomePage darkMode={darkMode} />
    </Layout>
  </ContainerApp>
)

export default Home
