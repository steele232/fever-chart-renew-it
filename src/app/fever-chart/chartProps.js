"use client";
import { random, range } from "lodash";

export const fillDataList = (array) => {
  const listSorted = dataListOne.sort((a, b) => {
    return a.progress - b.progress;
  });

  var dataFilled = [];

  var last = 0;
  for (let i = 0; i < listSorted.length; i++) {
    let progress = listSorted[i].progress - last;
    dataFilled = dataFilled.concat(Array(progress).fill(null));
    dataFilled = dataFilled.concat(listSorted[i]);
    last = listSorted[i].progress;
  }

  return dataFilled;
};

export const chartData = ({ datasets }) => {
  return {
    labels: range(0, 101),
    datasets: [
      ...datasets.map((e) => {
        // console.log(e);

        return {
          ...e,
          data: e.data.map((e) => {
            const y = e.y < 0 ? 0 : e.y;
            const x = e.x < 0 ? 0 : e.x;
            return { ...e, y, x };
          }),
        };
      }),
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

export const chartOptions = {
  spanGaps: true,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Buffer Consumed",
      },
    },
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Chain Completed",
      },
    },
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
      text: "Fever Chart",
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
            console.log(element.raw);
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
          return `Buffer Consumed: ${context.parsed.y}%`;
        },
        afterLabel: function (context) {
          return `Chain Completed: ${context.parsed.x}%\n`;
        },
      },
    },
  },
};
