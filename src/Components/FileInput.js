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

        freqArr.push(arr[0]);
        dbArr.push(arr[1]);
      });

      setFreqData(freqArr);
      setDbData(dbArr);
    };

    reader.readAsText(file);
  };
  return (
    <Fragment>
      <input
        type="file"
        className="text-white"
        onChange={(e) => handleFile(e)}
      />
      <input type="number" onInput={(e) => setYMax(parseInt(e.target.value))} />
      <input type="number" onInput={(e) => setYMin(parseInt(e.target.value))} />
      <Chart freqData={freqData} dbData={dbData} yMax={yMax} yMin={yMin} />
    </Fragment>
  );
};

export default FileInput;
