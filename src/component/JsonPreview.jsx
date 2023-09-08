import React from "react";
import "./json.css";
import { copyFunction, downloadJson } from "../helpers/functionalities";

const JsonPreview = ({ arr }) => {
  return (
    <pre>
      <code className="prettyprint json">
        {JSON.stringify(arr, null, 2)?.replace(/"([^"]+)":/g, "$1:")}
      </code>
      <div className="downloadCopyBtnDiv">
        <button
          onClick={() => downloadJson(arr)}
          className="button downloadBtn"
        >
          Download
        </button>
        <button
          onClick={() => copyFunction(document.querySelector(".json"))}
          class="button"
        >
          copy
        </button>
      </div>
    </pre>
  );
};

export default JsonPreview;
