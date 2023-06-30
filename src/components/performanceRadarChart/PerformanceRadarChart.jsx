import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import getUSerPerformance from '../../entity/UserPerformance';
import './PerformanceRadarChart.css'
function PerformanceRadarChart({idUser}){
    const data =getUSerPerformance(idUser);
    return(
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90}  data={data}>
                    <PolarGrid radialLines={false}  />
                    <PolarAngleAxis dataKey="kind" 
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 500 }} 
                    stroke="#FFFFFF" />
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
       
    )
}
export default PerformanceRadarChart