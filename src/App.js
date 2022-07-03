import "./App.css";
import TableCell from "./components/tablecell/TableCell";
import React, { useState } from "react";

function App() {
  const daySelector = [4, 5, 6, 7, 8, 9, 10];
  const timeSelector = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const [deleteButton, setDeleteButton] = useState(false);

  const displayDeleteButton = deleteButton ? "display" : "dontdisplay";

  const addTodo = () => {
    prompt(`What's need to be planned?`);
  };

  return (
    <div className="App">
      <header>
        <span id="header">Interview Calendar</span>
        <button onClick={addTodo} className="addTodoButton">
          +
        </button>
      </header>
      <div className="date_block">
        <div className="day_of_the_week">
          <div></div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div className="date_of_the_month">
          <div></div>
          <div>
            <div className="currentDay">4</div>
          </div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
        <div className="month_selector">
          <div></div>
          <button className="btnOnBlocks">&lt;</button>
          <div className="name_of_the_nonth">July</div>
          <button className="btnOnBlocks">&gt;</button>
        </div>
      </div>
      <div className="time_block">
        <div className="timing">
          <div></div>
          <div>9:00</div>
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div>
          <div>19:00</div>
          <div>20:00</div>
          <div></div>
        </div>
        <div className="time_selection_block">
          {timeSelector.map((time) => (
            <TableCell
              key={time}
              time={time}
              daySelector={daySelector}
              deleteButton={setDeleteButton}
            />
          ))}
        </div>
      </div>
      <div className="footer">
        <button className="btnOnBlocks" id="todayButton">
          Today
        </button>
        <button className={displayDeleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default App;
