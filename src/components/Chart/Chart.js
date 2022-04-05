import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
 const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
  return (
 <div className='d-flex mt-5 justify-content-between'>
   <div>
     <h3>investment, sell and revenue</h3>
   <LineChart width={400} height={300} data={data}>
     <Line dataKey={"investment"}></Line>
     <Line dataKey={"sell"} stroke={'blue'}></Line>

     <Line dataKey={"revenue"} stroke={"#82ca9d"}></Line>
     <YAxis></YAxis>
     <XAxis dataKey={"month"}></XAxis>
     <Tooltip></Tooltip>

   </LineChart>
   </div>
   <div className='mt-5'>
     <h3>investment sell and revenue </h3>
     <BarChart width={400} height={260} data={data}>
      <Bar dataKey={"investment"} fill={"blue"}></Bar>
      <Bar dataKey={"sell"} fill={"#8884d8"}></Bar>
      <Bar dataKey={"revenue"} fill={"#82ca9d"}></Bar>
      <XAxis></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
     </BarChart>
   </div>
 </div>
  );
};

export default Chart;