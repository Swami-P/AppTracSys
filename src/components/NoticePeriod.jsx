import React, { useState } from "react";

function NoticePeriod (props) {
  const data = [
    { label: "Day(s)", value: "days" },
    { label: "Month(s)", value: "months" }
  ];

  const [value, setValue] = useState("days");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="tleft">
        <select className="box-style" value={value} onChange={handleChange}>
            {data.map((data) => (
            <option value={data.value}>{data.label}</option>
            ))}
        </select>
    </div>
  );
}

export default NoticePeriod;
