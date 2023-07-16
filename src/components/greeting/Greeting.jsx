import './Greeting.css'
export function Greeting({name}){
    return(
        <>
            <p id="greeting-text">Bonjour <span>{name}</span></p>
            <p id="felicitation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    )
   
}