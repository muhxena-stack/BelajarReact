import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../features/todos/todosSlice';
import type { RootState, AppDispatch } from '../app/store';

const TodoList: React.FC = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambahkan todo..."
      />
      <button onClick={() => {
        if (input.trim()) {
          dispatch(addTodo(input));
          setInput('');
        }
      }}>
        Tambah
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
