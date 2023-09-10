import React from "react";

const RubyPreview = ({ arr, tableAction }) => {
  return (
    <pre>
      <code className="ruby">
        {arr.map((item) => {
          const form = Object.keys(item)
            .map((each) => `${each}: '${item[each]}'`)
            .join(`, `);
          return (
            <div>
              <p className="">
                {tableAction.table}.{tableAction.action}({form})
              </p>
              {"\n"}
            </div>
          );
        })}
      </code>
    </pre>
  );
};

export default RubyPreview;
