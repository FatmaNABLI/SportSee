import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/data.js'


export class User{
    constructor(idUser){  
        this.id= idUser;
        console.log(import.meta.env.VITE_APP_ENV)
        const u = USER_MAIN_DATA.find(elt=>elt.id ==idUser);
        //console.log(process.env.REACT_APP_ENV)
        //console.log(u);
        this.firstName = u.userInfos.firstName;
        this.lastName = u.userInfos.lastName;
        this.age = u.userInfos.age;
        // eslint-disable-next-line no-prototype-builtins
        u.hasOwnProperty('score')? this.todayScore = u.score : this.todayScore = u.todayScore
        //this.todayScore = u.score;
        this.keyData = u.keyData;
        this.activity = USER_ACTIVITY.find(elt=>elt.userId ==idUser).sessions;
        this.performance = USER_PERFORMANCE.find(elt=>elt.userId ==idUser).data;
        this.averageSessions = USER_AVERAGE_SESSIONS.find(elt=>elt.userId ==idUser).sessions;

    }
   getKeyData(){
       
        const translate  = word => {
            const frToEn={
                calories : 'calorieCount',
                proteines : 'proteinCount',
                glucides :  'carbohydrateCount',
                lipides : 'lipidCount'
            }
           return frToEn[word]
        }
        
        const keyData = {}
        keyData.calories = this.keyData[translate('calories')];
        keyData.proteines = this.keyData[translate('proteines')];
        keyData.glucides = this.keyData[translate('glucides')];
        keyData.lipides = this.keyData[translate('lipides')];
        return keyData;
        
    }
    getActivity(){    
        const userActivity = this.activity.map((obj,index)=> {
            let robj={}
            robj.day= index + 1
            robj.kilogram = obj.kilogram
            robj.calories = obj.calories
            return robj
        })
        return userActivity;
    }
    getAverageSessions(){   
        const tabDay = ['L','M','M','J','V','S','D'];  
        const userAverageSessions = this.averageSessions.map((obj)=> {
            let robj={}
            robj.day= tabDay[obj.day - 1] 
            robj.sessionLength = obj.sessionLength 
            return robj
        })
        return userAverageSessions;
    }
    getPerformance(){   
        const tabKind = ['Cardio','Energie','Endurance','Force','Vitesse','Intensité'];  
        const userPerformance =this.performance.map((obj)=> {
            let robj={}
            robj.value = obj.value 
            robj.kind = tabKind[obj.kind -1]
            return robj
        })
        return userPerformance;
    }
    
    getScore(){
        let obj={}
        obj.score = this.todayScore * 100
        return obj;
    }
}