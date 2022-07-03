import React, { useState } from "react";

const TableDiv = ({ day, time, deleteButton }) => {
  const [selectDate, setSelectDate] = useState(false);
  const tableCell = selectDate ? "chosen" : "unchosen";

  const selectedDate = (day) => {
    setSelectDate(!selectDate);
    deleteButton(!selectDate);
  };
  return (
    <div
      className={`time_selection_block_chosen ${tableCell}`}
      key={day + time}
      time={time}
      day={day}
      onClick={() => selectedDate(day)}
    />
  );
};

export default TableDiv;
