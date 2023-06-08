import '../css/style.css';
import logo from '../assets/logo_nb.png'


function Footer(){
    return(
        <footer>
            <img src={logo} alt='logo'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer;