import React from 'react';
import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  XAxis 
} from 'recharts';

interface ChartDataType {
  /** グラフのアクシスXラベル */
  name: string,
  /** ラインデータ１ */
  firstData: number,
  /** ラインデータ２ */
  secondData: number,
}

const Chart: React.FC<{
  graphData: ChartDataType[],
  height: number
}> = ({ graphData, height }) => {
  return (
    <ResponsiveContainer width="100%" minHeight={height}>
      <LineChart
        data={graphData}
        margin={{ top: 12, right: 30, left: 20, bottom: 12 }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        {/* TODO: ラインチャートのカラーを動的に変更 */}
        <Line
          type="linear" 
          dot={{ fill: '#FFCC21' }}
          dataKey="firstData"
          stroke="#FFCC21"
          strokeWidth={3}
        />
        <Line
          type="linear"
          dot={{ fill: '#8FE9D0' }}
          dataKey="secondData"
          stroke="#8FE9D0"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;