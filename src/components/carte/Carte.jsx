import './Carte.css'

function Carte({data}){
    return(
            <div className="carte">
                <div className="img-text"> 
                    <img src={data.icone} alt={`icone-${data.text}`} />
                    <div>
                        <p className="p-valeur">{data.valeur}{data.unite}</p>
                        <p className="p-text">{data.text}</p>
                    </div>
                    
                </div>
            </div>
        )
}
export default Carte