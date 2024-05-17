"use client";
import { useEffect, useState } from "react";
import FeverChart from "./FeverChart";
import fakeDataSets from "./fakeDataSets";

const FeverChartPage = () => {
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    const id = setTimeout(() => {
      setDatasets(fakeDataSets);
    }, 3000);

    () => clearTimeout(id);
  }, []);
  return (
    <div className="p-10">
      <div className="max-w-screen-2xl min-h-screen mx-auto">
        <FeverChart datasets={datasets} />
      </div>
    </div>
  );
};

export default FeverChartPage;
