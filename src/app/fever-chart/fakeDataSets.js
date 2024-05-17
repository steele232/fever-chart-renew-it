import { random } from "lodash";

const getRandomDate = () =>
  new Date(2024, random(1, 11), random(1, 27)).toString();

export const dataListOne = [
  {
    date: getRandomDate(),
    progress: 0,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 20,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 30,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 40,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 50,
    bufferConsumed: 41,
  },
  {
    date: getRandomDate(),
    progress: 60,
    bufferConsumed: 61,
  },
  {
    date: getRandomDate(),
    progress: 70,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 80,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 90,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 100,
    bufferConsumed: random(0, 100),
  },
];
export const dataListTwo = [
  {
    date: getRandomDate(),
    progress: 0,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 20,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 30,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 40,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 50,
    bufferConsumed: 41,
  },
  {
    date: getRandomDate(),
    progress: 60,
    bufferConsumed: 61,
  },
  {
    date: getRandomDate(),
    progress: 70,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 80,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 90,
    bufferConsumed: random(0, 100),
  },
  {
    date: getRandomDate(),
    progress: 100,
    bufferConsumed: random(0, 100),
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
    borderColor: "#7300ff",
    backgroundColor: "#7300ff",
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
    borderColor: "#0598fa",
    borderWidth: null,
    backgroundColor: "#0598fa",
    pointBorderWidth: 4,
  },
];

export default fakeDataSets;
