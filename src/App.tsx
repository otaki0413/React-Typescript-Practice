import axios from 'axios';
import { useState } from 'react';
import './styles.css';
import { Todo } from './Todo';
import { Text } from './Text';
import { TodoType } from './types/todo';

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <Text color="red" fontSize="15px" />
    </div>
  );
}
