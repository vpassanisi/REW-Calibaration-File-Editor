import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

const Chart = (props) => {
  const { freqData, dbData, yMax, yMin } = props;

  const formatData = () => {
    let str = "";

    for (let i = 0; i < freqData.length; i++) {
      str = str.concat(`${freqData[i]}, ${dbData[i]} \n`);
    }

    console.log(str);
  };

  return (
    <Fragment>
      <Line
        options={{ maintainAspectRatio: true }}
        redraw={true}
        data={{
          labels: freqData,
          datasets: [
            {
              data: dbData,
              borderColor: "white",
              pointBackgroundColor: "rgba(71, 182, 255, 1)",
              pointBorderColor: "rgba(0, 122, 204, 1)",
              fill: false,
            },
          ],
        }}
        options={{
          legend: false,
          dragData: true,
          dragX: false,
          dragDataRound: 1,
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: yMax,
                  min: yMin,
                  fontColor: "white",
                },
                gridLines: {
                  zeroLineColor: "white",
                  color: "rgba(46, 46, 46, 1)",
                },
              },
            ],
          },
        }}
      />
      <button
        className="text-white bg-blue-200 rounded shadow px-4 py-2"
        onClick={() => formatData()}
      >
        Print
      </button>
    </Fragment>
  );
};

export default Chart;
