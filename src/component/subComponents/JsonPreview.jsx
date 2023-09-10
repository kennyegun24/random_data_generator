import React from "react";
import "./json.css";

const JsonPreview = ({ arr }) => {
  return (
    <pre>
      <code className="prettyprint json">
        {JSON.stringify(arr, null, 2)?.replace(/"([^"]+)":/g, "$1:")}
      </code>
    </pre>
  );
};

export default JsonPreview;
