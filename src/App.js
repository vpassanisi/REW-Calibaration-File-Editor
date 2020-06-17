import React from "react";

import FileInput from "./Components/FileInput";

import "./CSS/tailwind.css";

function App() {
  return (
    <div>
      <div className="flex flex-col w-90p max-w-screen-sm text-white mx-auto bg-dark-gray-800 p-4 mt-8 rounded shadow">
        <p className="mb-2">
          This is a web app that lets you manipulate the values of a Room EQ
          Wizard calibration file in an easy to use UI. The calibarion file must
          be a text file containing comma separeted Frequency, Decibel sets each
          on a new line. Like this:{" "}
        </p>
        <p>50, -1</p>
        <p>100, 1</p>
        <p>1000, 0</p>
        <p>120000, -3</p>
        <p className="mb-2">etc. . .</p>
        <p>
          Once the data is loaded you can drag each point on the graph up and
          down to the desired dB value. When you are done just click on the
          "Generate File" button at the bottom, the edited data will be put into
          a file in the same format, then click the link that appears to
          download the new file containing your edited data.
        </p>
      </div>
      <FileInput />
    </div>
  );
}

export default App;
