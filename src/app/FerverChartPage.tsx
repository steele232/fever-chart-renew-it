"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  dataListOne,
  fillDataList,
  firstChartData,
  firstChartOptions,
} from "./firstChartProps";
import { Button } from "@/components";
import DatasetInput from "@/components/DatasetInput";
import { FormProvider, useForm } from "react-hook-form";
import { v4 } from "uuid";

export const FerverChartPage = () => {
  const actualDataList = fillDataList(dataListOne);
  const [datasets, setDatasets] = useState([v4(), v4()]);
  const [dataFormatted, setDataFormatted] = useState([]);
  const formMethods =
    useForm<Record<string, { name: string; file: Record<string, Blob> }>>();

  const [dataTransformed, setDataTransformed] = useState([]);

  useEffect(() => {
    const execution = async () => {
      const result = await datasetsFormatted();
      // setDataTransformed(result);
    };

    execution();
  }, [formMethods.getValues()]);

  console.log(formMethods.getValues());

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

      formatted.push({
        label: dataset.name,
        data,
        borderColor: "#1f2937",
        backgroundColor: "#1f2937",
      });
    }

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
                <Button
                  className="mt-8"
                  onClick={() => {
                    setDatasets([...datasets, v4()]);
                  }}
                >
                  Add new dataset
                </Button>
                <div>
                  <pre>{JSON.stringify(formMethods.watch(), null, 2)}</pre>
                </div>
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
