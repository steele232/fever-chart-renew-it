"use client";
import { random, range } from "lodash";
import { ChartData, ChartOptions, DatasetChartOptions } from "chart.js";

interface DataPoint {
  date: string;
  progress: number;
  bufferConsumed: number;
}

// const data: DataPoint = {
//   date: new Date().toString(),
//   progress: 10,
//   bufferConsumed: 50,
// };

export const dataListOne: DataPoint[] = [
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 0,
    bufferConsumed: 5,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 20,
    bufferConsumed: 20,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 30,
    bufferConsumed: 40,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 40,
    bufferConsumed: 40,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 50,
    bufferConsumed: 20,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 60,
    bufferConsumed: 80,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 70,
    bufferConsumed: 60,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 80,
    bufferConsumed: 70,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 90,
    bufferConsumed: 50,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 100,
    bufferConsumed: 80,
  },
];
export const dataListTwo: DataPoint[] = [
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 0,
    bufferConsumed: 20,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 20,
    bufferConsumed: 20,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 30,
    bufferConsumed: 40,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 40,
    bufferConsumed: 40,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 50,
    bufferConsumed: 20,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 60,
    bufferConsumed: 80,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 70,
    bufferConsumed: 60,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 80,
    bufferConsumed: 70,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 90,
    bufferConsumed: 50,
  },
  {
    date: new Date(2024, random(1, 11), random(1, 27)).toString(),
    progress: 90,
    bufferConsumed: 100,
  },
];

export const fillDataList = (array: DataPoint[]): Array<DataPoint | null> => {
  const listSorted = dataListOne.sort((a, b) => {
    return a.progress - b.progress;
  });

  var dataFilled: Array<DataPoint | null> = [];

  var last = 0;
  for (let i = 0; i < listSorted.length; i++) {
    let progress = listSorted[i].progress - last;
    dataFilled = dataFilled.concat(Array(progress).fill(null));
    dataFilled = dataFilled.concat(listSorted[i]);
    last = listSorted[i].progress;
  }

  return dataFilled;
};

export const firstChartData = (props: {
  datasets: ChartData<"line">["datasets"];
}): ChartData<"line"> => {
  return {
    labels: range(0, 101),
    datasets: [
      {
        label: "Dataset One",
        data: dataListOne.map((e) => {
          return {
            y: e.bufferConsumed,
            x: e.progress,
            date: new Date(e.date).toLocaleDateString([], {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
          };
        }),
        borderColor: "#1f2937",
        backgroundColor: "#1f2937",
        pointBorderWidth: 4,
      },
      {
        label: "Dataset Two",
        data: dataListTwo.map((e) => {
          return {
            y: e.bufferConsumed,
            x: e.progress,
            date: new Date(e.date).toLocaleDateString([], {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
          };
        }),
        borderColor: "orange",
        borderWidth: null,
        backgroundColor: "orange",
        pointBorderWidth: 4,
      },
      ...props.datasets,
      {
        label: "Dataset Green",
        data: [15, ...Array(99).fill(null), 75],
        borderColor: "#4ade80",
        backgroundColor: "#4ade80",
        pointRadius: 0,
        fill: true,
      },
      {
        label: "Dataset Yellow",
        data: [30, ...Array(99).fill(null), 90],
        borderColor: "#facc15",
        backgroundColor: "#facc15",
        pointRadius: 0,
        fill: true,
      },
      {
        label: "Dataset Red",
        data: [100, ...Array(99).fill(null), 100],
        borderColor: "#f87171",
        backgroundColor: "#f87171",
        pointRadius: 0,
        fill: true,
      },
    ],
  };
};

export const firstChartOptions: ChartOptions<"line"> = {
  spanGaps: true,
  scales: {
    y: { beginAtZero: true },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        filter: function (legendItem, data) {
          return !["Dataset Green", "Dataset Red", "Dataset Yellow"].includes(
            legendItem.text
          );
        },
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltip: {
      filter: function (context) {
        // Replace this condition with your own logic to hide the tooltip
        return !["Dataset Green", "Dataset Red", "Dataset Yellow"].includes(
          context.dataset.label
        );
      },
      callbacks: {
        title: function (context) {
          if (!context.length) return null;

          var title = "";

          for (let element of context) {
            title += `${element.dataset.label} (${new Date(
              element.raw.date
            ).toLocaleDateString([], {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })})\n`;
          }

          return title;
          // let label = context.dataset.label || "";
        },
        label: function (context) {
          return `Buffer Consumed: ${context.parsed.y}`;
        },
        afterLabel: function (context) {
          return `Chain Completed: ${context.parsed.x}\n`;
        },
      },
    },
  },
};
