import  './SideBar.css'
import yoga from '../../assets/yoga.svg'
import swiming from '../../assets/swiming.svg'
import velo from '../../assets/velo.svg'
import musculation from '../../assets/musculation.svg'

function SideBar(){
    return(
        <div id="sidebar">
            <nav>
                <ul>
                    <li> <img className ="img-logo" src={yoga} alt="logo kasa" /></li>
                    <li> <img className ="img-logo" src={swiming} alt="logo kasa" /></li>
                    <li> <img className ="img-logo" src={velo} alt="logo kasa" /></li>
                    <li> <img className ="img-logo" src={musculation} alt="logo kasa" /></li>
                </ul>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}
export default SideBar;