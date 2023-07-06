import Carte from '../carte/Carte'
import iconecalories from '../../assets/caloriesicon.svg'
import iconeproteines from '../../assets/proteinesicon.svg'
import iconeglucides from '../../assets/glucidesicon.svg'
import iconelipides from '../../assets/lipidesicon.svg'


import './RightBar.css'



function RightBar({keyData}){
    const tabIcones=[iconecalories,iconeproteines,iconeglucides,iconelipides];
    const tabData = [
        {icone: iconecalories,text:"calories",valeur:keyData.calories,unite:'cal'},
        {icone: iconeproteines,text:"proteines",valeur:keyData.proteines,unite:'g'},
        {icone: iconeglucides,text:"glucides",valeur:keyData.glucides,unite:'g'},
        {icone: iconelipides,text:"lipides",valeur:keyData.lipides,unite:'g'}
    ]
    return(
        <div className="rightBar">
            {
                tabData.map((data,index) =>(
                    <Carte key={`carte-${index}`} data={data}/>
                ))
            }
        </div>

    )
}
export default RightBar;