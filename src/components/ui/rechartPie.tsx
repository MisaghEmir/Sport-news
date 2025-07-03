"use client";
import { Pie, PieChart, Cell } from "recharts";

const data02 = [
  {
    name: "Group A",
    value: 5,
    color: "rgb(249 115 22)",
  },
  {
    name: "Group B",
    value: 3,
    color: "rgb(107 114 128)",
  },
  {
    name: "Group B",
    value: 2,
    color: "rgb(239 68 68)",
  },
];
export default function RechartsPie() {
  return (
    <PieChart width={180} height={160}>
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        accentHeight={"150"}
        cx="45%"
        cy="50%"
        innerRadius={50}
        outerRadius={60}
        fill="color"
      >
        {data02.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
}
