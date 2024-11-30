import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart1: React.FC = () => {
  const data = {
    labels: [
      "Sumatera Utara",
      "Sumatera Barat",
      "Riau",
      "DKI Jakarta",
      "Kepulauan Riau",
      "Malaysia",
    ],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [1035000, 214000, 210000, 30000, 11000, 5400],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Persebaran Penduduk Warga Mandailing",
      },
    },
  };

  return (
    <div className="flex justify-center items-center mt-32">
      <div className="w-full max-w-md md:max-w-2xl h-96">
        <h2 className="text-center text-xl font-semibold font-poppins mb-4">
          Diagram Persebaran Penduduk
        </h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart1;
