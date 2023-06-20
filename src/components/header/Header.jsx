import  './Header.css'
import logo from '../../assets/logo.svg'

function Header(){
    return(
        <header>
            <img className ="img-logo" src={logo} alt="logo kasa" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;