import React, { useEffect, useRef } from "react";
import {Chart} from 'chart.js'
import { historyOptions } from "../chartConfigs/chartConfigs";

export const HistoryChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              data: [
                { x: 1, y: 15 },
                { x: 2, y: 12 },
                { x: 3, y: 25 },
              ],
              backgroundColor: "rgba(174,305,194,0.5)",
              borderWidth: 1,
            },
          ],
        },
        options: historyOptions
      });
    }
  });
  return (
    <div className="bg-white border mt-2 rounded p-3">
        <div></div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
