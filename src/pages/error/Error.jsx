import { Link } from 'react-router-dom'
import './Error.css'
function Error(){
    return(
        <div id="error">
           <p id="error">404</p>
           <p>La page que vous demandez n'existe pas</p>
           <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error