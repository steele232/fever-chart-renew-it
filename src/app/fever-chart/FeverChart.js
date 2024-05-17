import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import { chartData, chartOptions } from "./chartProps";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const FeverChart = ({ datasets }) => {
  return <Line data={chartData({ datasets })} options={{ ...chartOptions }} />;
};

export default FeverChart;
