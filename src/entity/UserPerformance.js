import {USER_PERFORMANCE} from '../data/data.js'

function getUSerPerformance(idUser){   
    const tabKind = ['Cardio','Energie','Endurance','Force','Vitesse','Intensité'];  
    
    const userPerformance =USER_PERFORMANCE.find(elt=>elt.userId ==idUser).data.map((obj)=> {
        let robj={}
        robj.value = obj.value 
        robj.kind = tabKind[obj.kind -1]
        return robj
    })
    return userPerformance;
}
export default getUSerPerformance