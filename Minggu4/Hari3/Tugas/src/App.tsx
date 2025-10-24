import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Redux Toolkit Demo App</h1>
      <Counter />
      <TodoList />
      <UserList />
    </div>
  );
};

export default App;
