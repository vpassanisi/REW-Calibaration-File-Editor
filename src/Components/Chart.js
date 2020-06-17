import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";

const Chart = (props) => {
  const { freqData, dbData, yMax, yMin } = props;

  const formatData = () => {
    let str = "";

    for (let i = 0; i < freqData.length; i++) {
      str = str + `${freqData[i]}, ${dbData[i]}`;
    }

    let textFile = null;
    const makeTextFile = (text) => {
      const data = new Blob([text], {
        type: "text/plain",
        endings: "native",
      });

      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }

      textFile = window.URL.createObjectURL(data);

      return textFile;
    };

    const date = new Date(Date.now());
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      month: "short",
      day: "2-digit",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: hour },
      ,
      { value: minute },
      ,
      { value: second },
      ,
      { value: dayPeriod },
    ] = dateTimeFormat.formatToParts(date);

    const link = document.getElementById("downloadLink");
    link.href = makeTextFile(str);
    link.download = `Filters - ${month}/${day}, ${hour}:${minute}:${second} ${dayPeriod}`;
    link.classList.remove("hidden");
  };

  return (
    <Fragment>
      <Line
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
      <div className="flex flex-col items-center justify-center w-90p mx-auto mt-4">
        <button
          className="text-white bg-blue-200 rounded shadow px-4 py-2"
          onClick={() => formatData()}
        >
          Generate File
        </button>
        <a
          id="downloadLink"
          href="google.com"
          download
          className="text-light-blue-200 my-4 hidden"
        >
          Click here to download new filters
        </a>
      </div>
    </Fragment>
  );
};

export default Chart;
