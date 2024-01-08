import React, { useEffect, useState } from "react";
import LineChart from "../../charts/LineChart";

// Import utilities
import { tailwindConfig } from "../../../utils/Utils";
import { getPrediction } from "../../../services/api";

function DashboardCard01({ startDate, endDate }) {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const init = async () => {
      try {
        const res = await getPrediction(startDate, endDate);
        const temp_totalSales = [];
        const temp_averageSales = [];
        const temp_days = [];
        res.forEach((item) => {
          temp_totalSales.push(item.total_sales);
          temp_averageSales.push(item.average_order_value);
          temp_days.push(item.day);
        });
        const temp_chartData = {
          labels: temp_days,
          datasets: [
            // Indigo line
            {
              label: "Total",
              data: temp_totalSales,
              borderColor: tailwindConfig().theme.colors.indigo[500],
              fill: false,
              borderWidth: 2,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
              pointHoverBackgroundColor:
                tailwindConfig().theme.colors.indigo[500],
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0,
            },
            // Blue line
            {
              label: "Average",
              data: temp_averageSales,
              borderColor: tailwindConfig().theme.colors.blue[400],
              fill: false,
              borderWidth: 2,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
              pointHoverBackgroundColor:
                tailwindConfig().theme.colors.blue[400],
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0,
            },
            // emerald line
            // {
            //   label: 'Average',
            //   data: [122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223, 188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268],
            //   borderColor: tailwindConfig().theme.colors.emerald[500],
            //   fill: false,
            //   borderWidth: 2,
            //   tension: 0,
            //   pointRadius: 0,
            //   pointHoverRadius: 3,
            //   pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
            //   pointHoverBackgroundColor: tailwindConfig().theme.colors.emerald[500],
            //   pointBorderWidth: 0,
            //   pointHoverBorderWidth: 0,
            //   clip: 20,
            // },
          ],
        };
        setChartData(temp_chartData);
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    };
    init();
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Sales Over Time (all stores)
        </h2>
        <div>
          {chartData?.datasets?.map((item) => {
            return (
              <div className="flex items-center gap-1">
                <span
                  className={`w-3 h-3 rounded-[50%]`}
                  style={{ backgroundColor: item.borderColor }}
                ></span>
                <span className={`text-[${item.borderColor}]`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard01;
