import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart1: React.FC = () => {
  const data = {
    labels: ["Mandailing", "Lainnya"],
    datasets: [
      {
        data: [11.7, 88.3],
        backgroundColor: ["#A52A2A", "#FFD700"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center mt-32">
      <div className="w-full max-w-xs h-80 flex flex-col items-center">
        <h2 className="text-center text-xl font-semibold mb-4 font-poppins">
          Persentase Warga Batak Mandailing di Sumatera Utara
        </h2>
        <Pie data={data} options={options} />
        <span className="italic text-xs font-quicksand">(Sensus penduduk 2010)</span>
      </div>
    </div>
  );
};

export default PieChart1;
