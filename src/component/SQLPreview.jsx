import React from "react";

const SQLPreview = ({ arr, tableAction }) => {
  return (
    <pre>
      <code className="sql">
        {arr.map((item) => {
          const objects = Object.keys(item)
            .map((each) => `${each}`)
            .join(`, `);
          const values = Object.keys(item)
            .map((each) => `"${item[each]}"`)
            .join(`, `);
          return (
            <div>
              <p className="">
                {tableAction.action} into {tableAction.table} ({objects}) values
                ({values})
              </p>
              {"\n"}
            </div>
          );
        })}
      </code>
    </pre>
  );
};

export default SQLPreview;

// insert into MOCK_DATA (id, first_name, last_name, email, gender, ip_address) values (1, 'Audry', 'Safell', 'asafell0@quantcast.com', 'Female', '90.21.222.187');
// : '${item[each]}
