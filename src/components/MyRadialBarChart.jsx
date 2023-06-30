import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from "recharts";
const data = [

  {
    name: "unknow",
    uv: 12,
    pv:100,
    fill: "red"
  }
];
const data2 = [
  { uv: 20, fill: '#ffff00' },
  { uv: 20, fill: '#83a6ed' },
  { uv: 30, fill: '#83a6ed' },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: "20px"
};
const data3 = [
  { name: 'A', x: 1, fill: 'green' },
  //{ name: 'B', x: 2, fill: 'yellow' },
];

function MyRadialBarChart(){
    return(
        <div>
           
            <ResponsiveContainer width="100%" height='100%'>
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius='90%' 
                    data={data2} 
                    startAngle={180} 
                    endAngle={-180} >
                    <RadialBar 
                        minAngle={15} 
                        dataKey='uv' 
                        fill= '#FF0000' 
                        cornerRadius={25} 
                        barSize={10} />
                    <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
           <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={80}
            outerRadius={80}    
            barSize={10}
            data={data}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: "center", fill: "blue" }}
                    background
                    clockWise
                    dataKey="uv"
                    denominator='pv'
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
            </RadialBarChart>
            
            <RadialBarChart width={500} height={500} data={data2}>
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar   startAngle={90} background dataKey="uv" angleAxisId={0} data={[data2[0]]} />
              
            </RadialBarChart>

            


    <RadialBarChart width={400} height={400} data={data3}
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
        dataKey="value"
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

  </div>

    )
}
export default MyRadialBarChart;