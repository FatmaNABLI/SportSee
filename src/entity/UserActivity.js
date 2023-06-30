import {USER_ACTIVITY, USER_MAIN_DATA, } from '../data/data.js'

function getUSerActivity(idUser){    
    const userActivity = USER_ACTIVITY.find(elt=>elt.userId ==idUser).sessions.map((obj,index)=> {
        let robj={}
        robj.day= index + 1
        robj.kilogram = obj.kilogram
        robj.calories = obj.calories
        return robj
    })
    return userActivity;
}
export default getUSerActivity