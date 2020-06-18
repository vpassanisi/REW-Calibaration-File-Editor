import React, { Fragment, useState } from "react";

import Chart from "./Chart";

const FileInput = () => {
  const [freqData, setFreqData] = useState([]);
  const [dbData, setDbData] = useState([]);
  const [yMax, setYMax] = useState(1);
  const [yMin, setYMin] = useState(-1);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      let dataArr = event.target.result.split("\n");

      let freqArr = [];
      let dbArr = [];

      dataArr.forEach((item) => {
        const arr = item.split(", ");

        freqArr.push(parseFloat(arr[0].trim()));
        dbArr.push(parseFloat(arr[1].trim()));
      });

      setFreqData(freqArr);
      setDbData(dbArr);
    };

    reader.readAsText(file);
  };
  return (
    <Fragment>
      <div className="w-90p flex flex-col items-center justify-center my-8">
        <input
          type="file"
          className="text-white border-2 border-white rounded p-2 mb-4"
          onChange={(e) => handleFile(e)}
        />
        <div className="flex flex-row items-center justify-center mb-4">
          <div className="text-white mr-2">Max Y: </div>
          <input
            className="w-10"
            type="number"
            onInput={(e) => setYMax(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          <div className="text-white mr-2">Max X: </div>
          <input
            type="number"
            className="w-10"
            onInput={(e) => setYMin(parseInt(e.target.value))}
          />
        </div>
      </div>

      <Chart freqData={freqData} dbData={dbData} yMax={yMax} yMin={yMin} />
    </Fragment>
  );
};

export default FileInput;
