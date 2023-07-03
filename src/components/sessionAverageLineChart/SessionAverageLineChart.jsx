import {Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import getUSerAverageSessions from '../../entity/UserAverageSessions';
import './SessionAverageLineChart.css'
function SessionAverageLineChart({data}){

    const CustomTooltipSessions = ({ active, payload, label }) => {
        if (active && payload) {
          return (
            <div className="custom-tooltip-sessions">
              <p className="label">{`${payload[0].value} min`}</p>
            </div>
          );
        }
      
        return null;
    };
    const CustomCursor = (props) => {
        const { points, width, height, stroke } = props;
        const {x,y} = points[0]
      
        return (
          <Rectangle
            width={1000}
            height={1000}
            x={x}
            y={0}
            style={{background: 'red', opacity: 0.1}}
          />
        )
      }

    return(
        <div className='line-chart-container' style={{background:"#FF0000",width:"30%"}}>
            <LineChart width={258} height={200} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="day" tick={{ fill: '#FFFFFF', opacity: '0.5' }} axisLine={false} tickLine={false} />
                <YAxis hide={true} domain={['dataMin - 15', 'dataMax + 10']}/>
                <Tooltip content={<CustomTooltipSessions />} 
                position={{ y: 0 }} cursor={<CustomCursor />}

                />
                
                <Line type="monotone" dataKey="sessionLength" 
                stroke="#FFF"  strokeWidth={2} dot={false}  />   
                <text
                x="15%"
                y="15%"
                fontSize={14}
                fontWeight={500}
                width={100}
                fill={"#ffffffa4"}
                >
                    Durée moyenne des
                    <tspan x="15%" y="27%">
                    sessions
                    </tspan>
                </text>
            </LineChart>
        </div>
        
    )
}
export default SessionAverageLineChart