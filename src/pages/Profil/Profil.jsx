import ActivityBarChart from '../../components/charts/activityBarChart/ActivityBarChart'
import PerformanceRadarChart from '../../components/charts/performanceRadarChart/PerformanceRadarChart'
import RightBar from '../../components/rightbar/RightBar'
import ScoreRadialBarChart from '../../components/charts/scoreRadialBarChart/ScoreRadialBarChart'
import SessionAverageLineChart from '../../components/charts/sessionAverageLineChart/SessionAverageLineChart'
import { User } from '../../entity/User'
import './Profil.css'
import { useParams } from 'react-router-dom'
import {getUserMainDataFromAPI,getUserActivityFromAPI,getUserPerformanceFromAPI,getUserAverageSessionsFromAPI} from '../../api/fetchData'
import { useEffect, useState } from 'react'
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../../data/data.js'
import Error from '../error/Error'

function Profil() {
  const {idUser} = useParams()
  const [userMainData, setUserMainData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSession, setUserAverageSession] = useState()
  const [userPerformance, setUserPerformance] = useState()
  const [isError,setIsError] = useState(false)

  const ENV = import.meta.env.VITE_APP_ENV;

  useEffect(( )=>{
    if(ENV == 'production'){
        getUserMainDataFromAPI(idUser)
        .then(( data) => setUserMainData(data))
        .catch(error => setIsError(true))


        getUserActivityFromAPI(idUser)
        .then((data)=> setUserActivity(data))
        .catch(error => setIsError(true))

      getUserAverageSessionsFromAPI(idUser)
      .then((data)=>setUserAverageSession(data))
      .catch(error => setIsError(true))
      
      getUserPerformanceFromAPI(idUser)
      .then((data)=> setUserPerformance(data))
      .catch(error => setIsError(true))
      
    }else{
      setUserMainData(USER_MAIN_DATA.find(elt=>elt.id ==idUser))
      setUserActivity(USER_ACTIVITY.find(elt=>elt.userId ==idUser))
      setUserPerformance(USER_PERFORMANCE.find(elt=>elt.userId ==idUser))
      setUserAverageSession(USER_AVERAGE_SESSIONS.find(elt=>elt.userId ==idUser))
    }
  },[idUser,ENV])
  let user = {}
   if (!(( userMainData === undefined) && (userActivity === undefined)&& (userPerformance ===undefined)&& (userAverageSession === undefined))){
    user= new User(userMainData,userActivity,userPerformance,userAverageSession)
   } 
  
  return (
    isError? <Error />:
    <main>
      <h1>User {idUser}</h1>
      <div className='main-container'>
        <div className='charts-container'>
          {userActivity?<ActivityBarChart data={user.getActivity()} />:null}
          <div className="session-performance-score-container">
            {userAverageSession?<SessionAverageLineChart data={user.getAverageSessions()}/>:null}
            {userPerformance ?<PerformanceRadarChart data={user.getPerformance()}/>:null}
            {userMainData?<ScoreRadialBarChart data={[user.getScore()]} />:null}
          </div>
        </div>
        {userMainData?<RightBar keyData={user.getKeyData()}/>:null}

      </div>
      
      
    </main>
  )
}

export default Profil