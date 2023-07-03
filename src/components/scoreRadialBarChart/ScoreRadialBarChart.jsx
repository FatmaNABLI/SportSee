import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import './ScoreRadialBarChart.css'
function ScoreRadialBarChart({data}){
    console.log(data);
    const style = {
        top: 0,
        left: 350,
        lineHeight: "20px"
      };
    return(

        <div className="score-chart">
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart width={400} height={400} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    innerRadius={75}
    outerRadius={100}
    barSize={10}
    startAngle={90}
    endAngle={-270}>
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="score"
        cornerRadius={30 / 2}
      
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