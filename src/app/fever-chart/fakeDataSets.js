import { random } from "lodash";

export const dataListOne = [
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
export const dataListTwo = [
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

const fakeDataSets = [
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
];

export default fakeDataSets;
