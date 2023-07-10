import  './Header.css'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <header>
            <img className ="img-logo" src={logo} alt="logo kasa" />
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/user/12">Profil</NavLink></li>
                    <li><NavLink to="/reglages">Réglages</NavLink></li>
                    <li><NavLink to="/communaute">Communauté</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;