import "../../index.css";
import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export function CourseProgress({tasksDone, tasksTotal, courseName}) {
  return (
    <>
      <div className="grid justify-center p-4 bg-white rounded-xl text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50 text-center">
        <div>
          <h2 className="font-semibold text-xl font-secondary">{courseName}</h2>
        </div>
        <div className="flex content-center">
          <Gauge
            value={tasksDone}
            valueMax={tasksTotal}
            startAngle={-110}
            endAngle={110}
            innerRadius="70%"
            outerRadius="100%"
            height={150}
            width={150}
            max={10}
            min={0}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
            sx={{
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "custom-blue",
              },
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                fontWeight: "bold",
                fontFamily: "Oswald",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
