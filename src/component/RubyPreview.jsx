import React from "react";
import { copyFunction, downloadRuby } from "../helpers/functionalities";

const RubyPreview = ({ arr }) => {
  return (
    <pre>
      <code className="ruby">
        {arr.map((item) => {
          const form = Object.keys(item)
            .map((each) => `${each}: '${item[each]}'`)
            .join(`, `);
          return (
            <div>
              <p className="">User.create({form})</p>
              {"\n"}
            </div>
          );
        })}
      </code>
      <div className="downloadCopyBtnDiv">
        <button
          className="button downloadBtn"
          onClick={() => downloadRuby(document.querySelector(".ruby"))}
        >
          Download
        </button>
        <button
          onClick={() => copyFunction(document.querySelector(".ruby"))}
          class="button"
        >
          copy
        </button>
      </div>
    </pre>
  );
};

export default RubyPreview;
