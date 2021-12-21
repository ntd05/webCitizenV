import "../Analysis/Analysis.css"
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", sex: 10 },
  { name: "Group B", sex: 10 },
  { name: "Group C", sex: 10 },
  { name: "Group D", sex: 10 },
  { name: "Group E", sex: 10 },
  { name: "Group F", sex: 20 }
];

export default function Analysis() {
  return (
      <div className="mooo">
        <PieChart width={1000} height={400}>
      <Pie
        dataKey="sex"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
      </div>
    
  );
}
