"use client";
import { range } from "lodash";
import { ChartData, ChartOptions, DatasetChartOptions } from "chart.js";

interface DataPoint {
  date: string;
  progress: number;
  bufferConsumed: number;
}

const data: DataPoint = {
  date: new Date().toString(),
  progress: 10,
  bufferConsumed: 50,
};

export const dataList: DataPoint[] = [
  {
    date: new Date().toString(),
    progress: 0,
    bufferConsumed: 0,
  },
  {
    date: new Date().toString(),
    progress: 20,
    bufferConsumed: 20,
  },
  {
    date: new Date().toString(),
    progress: 30,
    bufferConsumed: 40,
  },
  {
    date: new Date().toString(),
    progress: 40,
    bufferConsumed: 40,
  },
  {
    date: new Date().toString(),
    progress: 50,
    bufferConsumed: 20,
  },
  {
    date: new Date().toString(),
    progress: 60,
    bufferConsumed: 80,
  },
  {
    date: new Date().toString(),
    progress: 70,
    bufferConsumed: 60,
  },
  // {
  //   date: new Date().toString(),
  //   progress: 80,
  //   bufferConsumed: 70,
  // },
  // {
  //   date: new Date().toString(),
  //   progress: 90,
  //   bufferConsumed: 50,
  // },
  // {
  //   date: new Date().toString(),
  //   progress: 100,
  //   bufferConsumed: 80,
  // },
];

export const fillDataList = (array: DataPoint[]): Array<DataPoint | null> => {
  const listSorted = dataList.sort((a, b) => {
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
      // {
      //   label: "Buffer consumed",
      //   // data: fillDataList(dataList).map((e) => {
      //   //   if (!e) {
      //   //     return null;
      //   //   }

      //   //   return e.bufferConsumed;
      //   // }),
      //   data: dataList.map((e) => {
      //     return { y: e.bufferConsumed, x: e.progress };
      //   }),
      //   borderColor: "#1f2937",
      //   backgroundColor: "#1f2937",
      //   pointBorderWidth: 4,
      // },
      ...props.datasets,
      {
        label: "Dataset Green",
        data: [20, ...Array(99).fill(null), 40],
        borderColor: "#4ade80",
        backgroundColor: "#4ade80",
        fill: true,
      },
      {
        label: "Dataset Yellow",
        data: [50, ...Array(99).fill(null), 70],
        borderColor: "#facc15",
        backgroundColor: "#facc15",
        pointBorderWidth: 0,

        fill: true,
      },
      {
        label: "Dataset Red",
        data: [100, ...Array(99).fill(null), 100],
        borderColor: "#f87171",
        backgroundColor: "#f87171",
        fill: true,
      },
    ],
  };
};

export const firstChartOptions: ChartOptions<"line"> = {
  spanGaps: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
