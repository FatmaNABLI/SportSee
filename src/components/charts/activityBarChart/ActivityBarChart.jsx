import './ActivityBarChart.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

function ActivityBarChart({data}){
    function CustomTooltipActivity ({payload, active}) {
        if (active) {
            return (
                <div className='activityChartTooltip'>
                    <div>{`${payload[0].value}`}kg</div>
                    <div>{`${payload[1].value}`}Kcal</div>
                </div>
            )
        }
        return null
    }
   
    return(
        <div className="barChart-container" style={{background:"#FBFBFB"}}>
          <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={320}
            data={data}
            margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 5
            }}
            >
            <text x={120} y={19} fill="#000" textAnchor="middle" dominantBaseline="central">
                    <tspan fontSize="15" fontWeight="700">Activité quotidienne</tspan>
            </text>
            <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 180]} />
            <XAxis dataKey="day" tickLine={false} domain={[1,7]} stroke='#9B9EAC'/>
            {/* Axe calories à gauche : invisible*/}
            <YAxis  yAxisId='left' dataKey='calories' orientation='left'stroke='#9B9EAC'domain={['dataMin -50', 'dataMax+100']} hide={true}/>                   
            {/* Axe poids à droite */}
            <YAxis  yAxisId='right' dataKey='kilogram'   domain={['dataMin', 'dataMax+1']} tickCount='4' orientation="right" axisLine={false} tickLine={false} 
                        width={45} stroke='#9B9EAC' />
            <Tooltip content={<CustomTooltipActivity />} />
            <Legend iconType="circle" iconSize="8px" verticalAlign="top" align="right"/>
            <Bar  yAxisId='right' name='Poids (kg)' barSize={7} radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#000" style={{"borderRadius":"5px"}} />
            <Bar  yAxisId='left' name='Calories brûlées (kCal)' barSize={7} radius={[10, 10, 0, 0]} dataKey="calories" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>
)
}
export default ActivityBarChart