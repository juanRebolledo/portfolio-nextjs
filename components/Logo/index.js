import LogoDark from './LogoDark'
import LogoLight from './LogoLight'

const Logo = ({ darkMode, width }) => darkMode ? <LogoDark width={width} /> : <LogoLight width={width}/> 

export default Logo
