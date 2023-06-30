import {USER_AVERAGE_SESSIONS} from '../data/data.js'

function getUSerAverageSessions(idUser){   
    const tabDay = ['L','M','M','J','V','S','D'];  
    
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(elt=>elt.userId ==idUser).sessions.map((obj)=> {
        let robj={}
        robj.day= tabDay[obj.day - 1] 
        robj.sessionLength = obj.sessionLength 
        return robj
    })
    return userAverageSessions;
}
export default getUSerAverageSessions