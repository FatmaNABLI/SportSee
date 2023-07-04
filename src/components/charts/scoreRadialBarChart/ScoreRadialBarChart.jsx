import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import './ScoreRadialBarChart.css'
function ScoreRadialBarChart({data}){
    console.log(data);      
    return(

        <div className="score-chart">
           <div className="container_score">
            <RadialBarChart data={data}
                    cx="50%" 
                    cy="50%"
                    innerRadius={90}
                    width={200} height={200}
                    background = "#fff"
                    outerRadius={100}
                    barSize={10}
                    startAngle={180}
                    endAngle={-180}>
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                      />
                      <RadialBar
                        dataKey="score"
                        cornerRadius={30 / 2}
                        fill="#FF0000"

                      />
                       <circle cx="50%" cy="50%" fill="white" r="85"></circle>
                      <text
                        x={100}
                        y={100}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                      >
                      {data[0].score}%
                      </text>  
              </RadialBarChart>

            </div>         
        </div>
    )

}
export default ScoreRadialBarChart