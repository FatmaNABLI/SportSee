import ActivityBarChart from '../components/charts/activityBarChart/ActivityBarChart'
import PerformanceRadarChart from '../components/charts/performanceRadarChart/PerformanceRadarChart'
import RightBar from '../components/rightbar/RightBar'
import ScoreRadialBarChart from '../components/charts/scoreRadialBarChart/ScoreRadialBarChart'
import SessionAverageLineChart from '../components/charts/sessionAverageLineChart/SessionAverageLineChart'
import { User } from '../entity/User'
import './Home.css'
import { useParams } from 'react-router-dom'

function Home() {
  const {idUser} = useParams()
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
        <RightBar/>
      </div>
      
      
    </main>
  )
}

export default Home
