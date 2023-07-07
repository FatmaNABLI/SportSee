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

function Home() {
  const {idUser} = useParams()
  const [userMainData, setUserMainData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSession, setUserAverageSession] = useState()
  const [userPerformance, setUserPerformance] = useState()
  const ENV = import.meta.env.VITE_APP_ENV;
  console.log(ENV)
  useEffect(( )=>{
    if(ENV == 'production'){
      getUserMainDataFromAPI(idUser)
      .then(( data) => setUserMainData(data)) 
  
      getUserActivityFromAPI(idUser)
      .then((data)=> setUserActivity(data))
      
      getUserAverageSessionsFromAPI(idUser)
      .then((data)=>setUserAverageSession(data))
  
      getUserPerformanceFromAPI(idUser)
      .then((data)=>{
        setUserPerformance(data)
        
      })
    }else{
      setUserMainData(USER_MAIN_DATA)
    }
  },[])
   
  console.log(userMainData)
  const user = new User(idUser);

  
  return (
    <main>
      <h1>User {idUser}</h1>
      <div className='main-container'>
        <div className='charts-container'>
          <ActivityBarChart data={user.getActivity()} />
          <div className="session-performance-score-container">
            <SessionAverageLineChart data={user.getAverageSessions()}/>
            <PerformanceRadarChart data={user.getPerformance()}/>
            <ScoreRadialBarChart data={[user.getScore()]} />
          </div>
        </div>
        <RightBar keyData={user.getKeyData()}/>
      </div>
      
      
    </main>
  )
}

export default Home
