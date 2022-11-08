import './Navbar.css'
import Logo from '../images/ironhack-logo-xs.png'
import Icon from '../images/menu-top-xs.png'

function  Navbar() {
    return (
        <nav className="flex-jc-space-between">
            <img className="logo" src={Logo} alt="logo"/>
            <img className="menu-icon" src={Icon} alt="icon"/>
        </nav>
    )
}

export default Navbar;