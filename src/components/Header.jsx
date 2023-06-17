import "../css/style.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" id="logo"></img>
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    );
}

export default Header;
