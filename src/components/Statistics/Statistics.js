import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const quiz = useLoaderData();

  const { data } = quiz;
  console.log(data);
  return (
    <div className="my-4 ">
      <Container>
        <LineChart width={1000} height={600} data={data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </Container>
    </div>
  );
};

export default Statistics;
