import CodeDark from './CodeDark'
import CodeLight from './CodeLight'

const Code = ({darkMode}) => darkMode ?  <CodeLight /> : <CodeDark />

export default Code
