import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';



function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
