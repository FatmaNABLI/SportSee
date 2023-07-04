import Carte from '../carte/Carte';
import './RightBar.css'

function RightBar(){
    const tabCouleursCartes=["#FF0000","#4AB8FF","#F9CE23","#FD5181"];
    const tabIcones=[];

    return(
        <div className="rightBar">
            <Carte/>
        </div>

    )
}
export default RightBar;