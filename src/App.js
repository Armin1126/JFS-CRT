
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text,setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = (e) =>{
    e.preventDefault();
    if(text.trim() ===' ') return;
    const newTodo = {
      id: Date.now(),
      text: text,

      done:false
    };
    setTodos([...todos, newTodo]);
    setText('');
  };
  const toggleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        return {...todo, done: !todo.done};
      }
      return todo;
    });
    setTodos(updatedTodos); 
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !==id);
    setTodos(updatedTodos);
  }

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    setTodos(todos.map(t => t.id === editingId ? {...t, text: editText} : t));
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>

        <form className="todo-form" onSubmit={addTodo}>
          <input
            className="todo-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo and press Add"
            aria-label="New todo"
          />
          <button className="todo-add" type="submit">Add</button>
        </form>

        <ul className="todo-list">
          {todos.length === 0 && <li className="empty">No todos yet — add one!</li>}
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />
                {editingId === todo.id ? (
                  <input
                    className="todo-input-edit"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span className="todo-text">{todo.text}</span>
                )}
              </label>
              {editingId === todo.id ? (
                <>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <button className="todo-edit" onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
              )}
              <button className="todo-delete" onClick={() => removeTodo(todo.id)} aria-label={`Delete ${todo.text}`}>
                ×
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
