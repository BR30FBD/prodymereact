import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function DateRangeSelector() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <div>
      <DesktopDatePicker
        label="From Date"
        inputFormat="MM/dd/yyyy"
        value={fromDate}
        onChange={handleFromDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <DesktopDatePicker
        label="To Date"
        inputFormat="MM/dd/yyyy"
        value={toDate}
        onChange={handleToDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}

export default DateRangeSelector;
