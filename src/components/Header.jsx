import '../css/style.css';
import logo from '../assets/logo.png'

function Header() {
    return(
    <header>   
        <img src={logo} alt='logo' id='logo'></img>
        <nav>
            <a href=''>Acceuil</a>
            <a href=''>A propos</a>
        </nav>
    </header>
    )
}

export default Header;