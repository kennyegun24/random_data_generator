import React from "react";
import JsonPreview from "./JsonPreview";
import RubyPreview from "./RubyPreview";

const Preview = ({ arr, setShow }) => {
  return (
    <div className="preview_container">
      <div className="json_container flex column justify_between">
        <div className="flex justify_between">
          <JsonPreview arr={arr} />
          <RubyPreview arr={arr} />
        </div>
        <button class="button closeBtn" onClick={() => setShow(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Preview;
