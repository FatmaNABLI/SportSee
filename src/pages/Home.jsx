import ActivityBarChart from '../components/activityBarChart/ActivityBarChart'
import PerformanceRadarChart from '../components/performanceRadarChart/PerformanceRadarChart'
import ScoreRadialBarChart from '../components/scoreRadialBarChart/ScoreRadialBarChart'
import SessionAverageLineChart from '../components/sessionAverageLineChart/SessionAverageLineChart'
import { User } from '../entity/User'
import './Home.css'
import { useParams } from 'react-router-dom'

function Home() {
  const {idUser} = useParams()
  const user = new User(idUser);
  return (
    <main>
      <h1>User {idUser}</h1>
      <ActivityBarChart data={user.getActivity()} />
      <div className="charts-flex-container">
        <SessionAverageLineChart data={user.getAverageSessions()}/>
        <PerformanceRadarChart data={user.getPerformance()}/>
        <ScoreRadialBarChart data={user.getScore()} />
      </div>
    </main>
  )
}

export default Home
