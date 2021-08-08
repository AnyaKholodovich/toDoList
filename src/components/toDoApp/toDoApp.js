import React, { useState, useEffect } from 'react';
import TodoList from "../TodoList/TodoList";
import './toDoApp.css'

function TodoApp() {
    const [items, setItems] = useState([]);
    const [text, seText] = useState("");

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) =>  setItems(json.slice(0, 10)))
    }, []);
  

  const handleСheckbox = (id) => {
    let newItems = items.slice();
    const delId = newItems.findIndex((n) => n.id === id);
    newItems[delId].cheked = !newItems[delId].cheked;
    setItems(newItems);
  }

  const handleRemove = (id) => {
    let newItems = items.slice();
    const delId = newItems.findIndex((n) => n.id === id);
    newItems.splice(delId, 1);
    setItems(newItems);
  }

  const changeTask = (arr) => {
    return (
      <ul>
        {arr.map((item) => (
          <TodoList
            key={item.id}
            item={item}
            onClick={() => handleRemove(item.id)}
            onChange={() => handleСheckbox(item.id)}
          />
        ))}
      </ul>
    );
  }

 const handleChange = (event) => {
    setItems(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
      cheked: false
    };
    setItems(items.concat(newItem));
    seText("");
  }


    return (
      <div className="toDoBlock">
        <h3>Список дел</h3>
        {changeTask(items)}
        <form onSubmit={handleSubmit}>
          <div className="toDoTxt">
            <label htmlFor="new-todo">Что нужно сделать?</label>
          </div>
          <input
            id="new-todo"
            onChange={handleChange}
            value={text}
          />
          <button className="add-btn">
            Добавить #{items.length + 1}
          </button>
        </form>
      </div>
    );
}

export default TodoApp;
