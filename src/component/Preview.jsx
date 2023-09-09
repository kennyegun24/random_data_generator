import React, { useState } from "react";
import JsonPreview from "./JsonPreview";
import RubyPreview from "./RubyPreview";
import {
  copyFunction,
  downloadJson,
  downloadRuby,
} from "../helpers/functionalities";

const Preview = ({ arr, setShow, generateType }) => {
  const [rubyAction, setRubyAction] = useState({
    table: "",
    action: "",
  });
  return (
    <div className="preview_container">
      <div className="json_container flex column justify_between">
        <div className="flex justify_between">
          {generateType === "json" ? (
            <JsonPreview arr={arr} />
          ) : (
            <RubyPreview arr={arr} tableAction={rubyAction} />
          )}
        </div>
        <div className="downloadCopyBtnDiv">
          <button class="button closeBtn" onClick={() => setShow(false)}>
            Close
          </button>
          {generateType === "json" && (
            <>
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
            </>
          )}
          {generateType === "ruby" && (
            <>
              {" "}
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
              <input
                type="text"
                className="input"
                placeholder="Table name..."
                name="table"
                onChange={(e) =>
                  setRubyAction({
                    ...rubyAction,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="input"
                placeholder="Action..."
                name="action"
                onChange={(e) =>
                  setRubyAction({
                    ...rubyAction,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
