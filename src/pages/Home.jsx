import ActivityBarChart from '../components/charts/activityBarChart/ActivityBarChart'
import PerformanceRadarChart from '../components/charts/performanceRadarChart/PerformanceRadarChart'
import RightBar from '../components/rightbar/RightBar'
import ScoreRadialBarChart from '../components/charts/scoreRadialBarChart/ScoreRadialBarChart'
import SessionAverageLineChart from '../components/charts/sessionAverageLineChart/SessionAverageLineChart'
import { User } from '../entity/User'
import './Home.css'
import { useParams } from 'react-router-dom'
import {getUserMainDataFromAPI,getUserActivityFromAPI,getUserPerformanceFromAPI,getUserAverageSessionsFromAPI} from '../api/fetchData'
import { useEffect, useState } from 'react'
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/data.js'
import Error from './error/Error'

function Home() {
  const {idUser} = useParams()
  const [userMainData, setUserMainData] = useState({})
  const [userActivity, setUserActivity] = useState({})
  const [userAverageSession, setUserAverageSession] = useState({})
  const [userPerformance, setUserPerformance] = useState({})
  const [error,setError] = useState(null)

  const ENV = import.meta.env.VITE_APP_ENV;

  useEffect(( )=>{
    if(ENV == 'production'){
      getUserMainDataFromAPI(idUser)
      .then(( data) => setUserMainData(data))
      .catch((error) =>   setError(true))
 
  
      getUserActivityFromAPI(idUser)
      .then((data)=> setUserActivity(data))
      .catch((error) =>   setError(true))

      getUserAverageSessionsFromAPI(idUser)
      .then((data)=>setUserAverageSession(data))
      .catch((error) =>   setError(true))
      getUserPerformanceFromAPI(idUser)
      .then((data)=>{
        setUserPerformance(data)
        
      })
      .catch((error) =>   setError(true))
    }else{
      setUserMainData(USER_MAIN_DATA.find(elt=>elt.id ==idUser))
      setUserActivity(USER_ACTIVITY.find(elt=>elt.userId ==idUser))
      setUserPerformance(USER_PERFORMANCE.find(elt=>elt.userId ==idUser))
      setUserAverageSession(USER_AVERAGE_SESSIONS.find(elt=>elt.userId ==idUser))
    }
  },[])
  let user = {}
   if (userMainData && userActivity && userPerformance && userAverageSession){
    user= new User(userMainData,userActivity,userPerformance,userAverageSession)
   } 
  
   if(error){
    return <Error />
   }
  return (
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

export default Home
