import React, { useState } from "react";
import "./TableCell.css";
import TableDiv from "../tablediv/TableDiv";

const TableCell = ({ time, daySelector, deleteButton }) => {
  return (
    <div className="gridclass">
      {daySelector.map((day) => (
        <TableDiv
          day={day}
          time={time}
          key={day + time}
          deleteButton={deleteButton}
        />
      ))}
    </div>
  );
};

export default TableCell;
