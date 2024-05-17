"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend,
  LegendElement,
  ChartDatasetProperties,
  ChartDataset,
  DatasetChartOptions,
  LineOptions,
  ChartOptions,
  LineProps,
  Tooltip,
} from "chart.js";
import {
  dataListOne,
  fillDataList,
  firstChartData,
  firstChartOptions,
} from "./firstChartProps";
import { Button } from "@/components";
import DatasetInput from "@/components/DatasetInput";
import { FormProvider, useController, useForm } from "react-hook-form";
import { v4 } from "uuid";
import getRandomColor from "@/helpers/getRandomColor";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const FerverChartPage = () => {
  const [datasets, setDatasets] = useState([v4(), v4()]);
  const [dataFormatted, setDataFormatted] = useState([]);
  const formMethods =
    useForm<Record<string, { name: string; file: Record<string, Blob> }>>();

  const [dataTransformed, setDataTransformed] = useState([]);

  const datasetsFormatted = async () => {
    const datasets = Object.values(formMethods.getValues());
    const formatted = [];
    for (let dataset of datasets) {
      var data: any[] = [];

      if (dataset.file.length) {
        const result = await new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          const blob = dataset.file?.[0];

          if (blob) {
            fileReader.readAsText(blob, "UTF-8");
            fileReader.onload = (e) => {
              const dataFromFile = JSON.parse(e.target?.result as string);
              resolve(dataFromFile);
            };
          }
        });

        data = result;
        // console.log(result);
      }

      const color = getRandomColor();

      formatted.push({
        label: dataset.name,
        data: data.map((e) => {
          return { y: e.bufferConsumed, x: e.progress, date: e.date };
        }),
        borderColor: color,
        backgroundColor: color,
        pointBorderWidth: 4,
      });
    }
    setDataTransformed([...formatted]);
    return formatted;
  };

  return (
    <div className="p-10">
      <div className="max-w-screen-2xl min-h-screen mx-auto">
        <div>
          <h1 className="text-5xl font-bold">Fever charts</h1>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-[400px_1fr] gap-8">
            <FormProvider {...formMethods}>
              <div>
                <div className="flex flex-col gap-8">
                  {datasets.map((e) => {
                    return <DatasetInput key={e} id={e} />;
                  })}
                </div>
                <div className="grid grid-flow-col justify-between">
                  <Button
                    className="mt-8"
                    variant="outlined"
                    onClick={() => {
                      setDatasets([...datasets, v4()]);
                    }}
                  >
                    Add new dataset
                  </Button>
                  <Button
                    className="mt-8"
                    onClick={() => {
                      datasetsFormatted();
                    }}
                  >
                    Update
                  </Button>
                </div>

                {/* <div>
                  <pre>{JSON.stringify(formMethods.watch(), null, 2)}</pre>
                </div> */}
              </div>

              <div className="w-full h-full">
                <Line
                  data={firstChartData({ datasets: dataTransformed })}
                  options={{ ...firstChartOptions }}
                />
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerverChartPage;
