import React from "react";
import JsonPreview from "./subComponents/JsonPreview";
import RubyPreview from "./subComponents/RubyPreview";
import {
  copyFunction,
  downloadJson,
  downloadRuby,
  downloadSQL,
} from "../helpers/functionalities";
import SQLPreview from "./subComponents/SQLPreview";
import ExcelPreview from "./subComponents/ExcelPreview";

const Preview = ({ arr, setShow, generateType, dataAction }) => {
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
            <RubyPreview arr={arr} tableAction={dataAction} />
          ) : generateType === "SQL" ? (
            <SQLPreview arr={arr} tableAction={dataAction} />
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
            </>
          )}
          {generateType === "SQL" && (
            <>
              {" "}
              <button
                className="button downloadBtn"
                onClick={() => downloadSQL(document.querySelector(".sql"))}
              >
                Download
              </button>
              <button
                onClick={() => copyFunction(document.querySelector(".sql"))}
                class="button"
              >
                copy
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
