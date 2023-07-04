import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import './ScoreRadialBarChart.css'
function ScoreRadialBarChart({data}){
    console.log(data);      
    return(

        <div className="score-chart">
            <ResponsiveContainer width="100%" height="100%">
                 <RadialBarChart data={data}
                    innerRadius={75}
                    background
                    outerRadius={100}
                    barSize={10}
                    startAngle={90}
                    endAngle={-270}>
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                      />
                      <RadialBar
                        dataKey="score"
                        cornerRadius={30 / 2}
                        fill="#0BEFF2"
                      />
                      <text
                        x={400 / 2}
                        y={400 / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                      >
                      89  
                </text>  
              </RadialBarChart>

           
               
            </ResponsiveContainer>
        </div>
    )

}
export default ScoreRadialBarChart