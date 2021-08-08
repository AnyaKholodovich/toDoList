import React from "react";
import "./ToDoList.css"

function TodoList ({item, onChange, onClick}) {
    return (
      <li className="li-task">
        <label>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onChange()}
          />
          {item.title}
        </label>
        {item.cheked && (
          <button className="cancel-btn" onClick={() => onClick()}>
            Удалить
          </button>
        )}
      </li>
    );
}

export default TodoList;
