import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';
import { createData } from '../graph';

export function MyLineChart({ followers, posts}: {followers: number, posts: number}) {
  const data = createData(followers, posts)
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <LineChart width={450} height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis 
          dataKey="name" 
          axisLine={{ stroke: '#000000', strokeWidth: 2 }} 
          tickLine={false}
          tick={{ fill: '#000000', fontSize: 12, fontWeight: 'bold' }}
        >
            <Label value="YEAR" position="insideBottom" offset={-10} className="fill-black text-xs font-black tracking-tighter" />
        </XAxis>
        <YAxis 
          dataKey="kms" 
          axisLine={{ stroke: '#000000', strokeWidth: 2 }} 
          tickLine={false}
          tick={{ fill: '#000000', fontSize: 12, fontWeight: 'bold' }}
        >
            <Label 
              value="KMS COUNT" 
              position="insideLeft" 
              angle={-90} 
              offset={10}
              style={{ textAnchor: 'middle' }}
              className="fill-black text-xs font-black tracking-tighter" 
            />
        </YAxis>
        <Line type="monotone" dataKey="kms" stroke="#000000" strokeWidth={4} dot={false} activeDot={false}/>
      </LineChart>
    </div>
  );
}
