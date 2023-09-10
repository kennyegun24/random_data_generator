import React, { useRef } from "react";
import "./excel.css";
import { useDownloadExcel } from "react-export-table-to-excel";

const ExcelTable = ({ arr }) => {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <>
      <table className="excelTable excel" ref={tableRef}>
        <thead className="thead">
          <tr style={{ color: "#000" }}>
            {Object.keys(arr[0]).map((columns) => (
              <th className="th">{columns}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {arr.map((item, index) => (
            <tr style={{ color: "#000" }} key={index}>
              {Object.values(item).map((value, innerIndex) => (
                <td className="td" key={innerIndex}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "7%",
        }}
      >
        {" "}
        <button
          className="button downloadBtn"
          // onClick={() => downloadExcel(arr)}
          onClick={onDownload}
        >
          Download
        </button>
      </div>
    </>
  );
};

export default ExcelTable;
