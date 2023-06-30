import ActivityBarChart from '../components/activityBarChart/ActivityBarChart'
import PerformanceRadarChart from '../components/performanceRadarChart/PerformanceRadarChart'
import SessionAverageLineChart from '../components/sessionAverageLineChart/SessionAverageLineChart'
import './Home.css'
import { useParams } from 'react-router-dom'

function Home() {
  const {idUser} = useParams()
 
  return (
    <main>
      <h1>User {idUser}</h1>
      <ActivityBarChart idUser={idUser} />
      <div className="charts-flex-container">
        <SessionAverageLineChart idUser={idUser}/>
        <PerformanceRadarChart idUser={idUser}/>
      </div>
      
      
    </main>
  )
}

export default Home
