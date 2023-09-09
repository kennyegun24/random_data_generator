import React, { useState } from "react";
import ExcelTable from "./excelComponents/ExcelTable";
import ExcelRaw from "./excelComponents/ExcelRaw";

const ExcelPreview = ({ arr }) => {
  const [tab, setTab] = useState(1);
  return (
    <div className="width100">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          width: "100%",
          height: "6%",
        }}
      >
        <button className="button" onClick={() => setTab(1)} type="button">
          Table
        </button>
        <button className="button" onClick={() => setTab(2)} type="button">
          Raw
        </button>
      </header>
      <div className="excelContainer">
        {tab === 1 ? <ExcelTable arr={arr} /> : ""}
        {tab === 2 ? <ExcelRaw arr={arr} /> : ""}
      </div>
    </div>
  );
};

export default ExcelPreview;
