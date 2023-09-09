import React, { useState } from "react";
import JsonPreview from "./JsonPreview";
import RubyPreview from "./RubyPreview";
import {
  copyFunction,
  // downloadExcel,
  downloadJson,
  downloadRuby,
  downloadSQL,
} from "../helpers/functionalities";
import SQLPreview from "./SQLPreview";
import ExcelPreview from "./ExcelPreview";

const Preview = ({ arr, setShow, generateType }) => {
  const [rubyAction, setRubyAction] = useState({
    table: "",
    action: "",
  });
  return (
    <div className="preview_container">
      <div className="json_container flex column justify_between">
        <header className="previewHeader">
          <h2 className="white text-center">Preview</h2>
        </header>
        <div className="flex justify_between previewBody">
          {generateType === "json" ? (
            <JsonPreview arr={arr} />
          ) : generateType === "ruby" ? (
            <RubyPreview arr={arr} tableAction={rubyAction} />
          ) : generateType === "SQL" ? (
            <SQLPreview arr={arr} tableAction={rubyAction} />
          ) : (
            <ExcelPreview arr={arr} />
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
                onClick={() =>
                  rubyAction.action !== "" &&
                  rubyAction.table !== "" &&
                  downloadRuby(document.querySelector(".ruby"))
                }
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
          {generateType === "SQL" && (
            <>
              {" "}
              <button
                className="button downloadBtn"
                onClick={() =>
                  rubyAction.action !== "" &&
                  rubyAction.table !== "" &&
                  downloadSQL(document.querySelector(".sql"))
                }
              >
                Download
              </button>
              <button
                onClick={() => copyFunction(document.querySelector(".sql"))}
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
