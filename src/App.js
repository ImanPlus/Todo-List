import React, {useState} from 'react';
import './css/App.css';

import TodoList from './Component/TodoList';

function App() {
  ///-------- State --------///
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'Meet the mother',
      isComplete: false,
      linPic: 'https://lh3.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
    },
    {
      id: '2',
      text: 'Go to the car wash',
      isComplete: false,
      linPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1200px-Firefox_Logo%2C_2017.svg.png',
    },
    {
      id: '3',
      text: 'Book reading',
      isComplete: false,
      linPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png',
    },
  ]);

  return (
    <div className="app">
      <div className="header"><p>(( To-Do list -- Add, Edit, Delete))</p></div>
      <div className="todo-list">
        {
          todos.map((todo, index) =>
          <TodoList
            key={index}
            index={index}
            todo={todo}

          />
          )
        }
      </div>

    </div>
  );
}

export default App;
