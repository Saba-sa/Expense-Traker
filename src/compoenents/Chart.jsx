import React, { useState } from "react";
import { FaChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useExpenseData } from "../Store/Expensestore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { BarChart, Bar, Rectangle } from "recharts";

const Chart = () => {
  const { defaultData, total } = useExpenseData();
  const data = defaultData.map((data) => {
    return { ...data, total: total };
  });
  const [graphView, setgraphView] = useState({
    bar: true,
    line: false,
    pie: false,
  });
  return (
    <div className="p-4">
      <div className="cart-icons flex items-center justify-around">
        <FaChartBar
          fill={`${graphView.bar && "blue"}`}
          className="cursor-pointer"
          onClick={() => setgraphView({ bar: true, line: false, pie: false })}
        />
        <FaChartLine
          fill={`${graphView.line && "blue"}`}
          className="cursor-pointer"
          onClick={() => setgraphView({ bar: false, line: true, pie: false })}
        />
        <FaChartPie
          fill={`${graphView.pie && "blue"}`}
          className="cursor-pointer"
          onClick={() => setgraphView({ bar: false, line: false, pie: true })}
        />
      </div>
      <div className="carts h-96 flex items-center flex-col">
        {graphView.pie && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={400}>
              <Pie
                dataKey="spent"
                isAnimationActive={false}
                data={data}
                cx="25%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Pie
                dataKey="spent"
                data={data}
                cx="64%"
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
        {graphView.line && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="spent"
                stroke="#8884d8"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="spent"
                stroke="#82ca9d"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        {graphView.bar && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="spent"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="total"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Chart;
