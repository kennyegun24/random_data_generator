import React from "react";

const ExcelRaw = ({ arr, tableAction }) => {
  return (
    <pre>
      <code className="excel">
        <p>{Object.keys(arr[0]).join(`, `)}</p>
        {"\n"}
        {arr.map((item) => {
          const values = Object.keys(item)
            .map((each) => `${item[each]}`)
            .join(`, `);
          return (
            <div>
              <p className="">{values}</p>
              {"\n"}
            </div>
          );
        })}
      </code>
    </pre>
  );
};

export default ExcelRaw;

// first_name,last_name,email,gender,ip_address
// Courtnay,Pieper,cpieper0@chron.com,Female,97.2.94.114
