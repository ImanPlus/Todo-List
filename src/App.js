import React, {useEffect, useState} from 'react';
import './css/App.css';

import TodoList from './Component/TodoList';
import AddTodo from "./Component/AddTodo";
import SearchBar from "./Component/SearchBar";

function App() {
  ///-------- State --------///
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Meet the mother',
      isComplete: false,
      linkPic: 'https://lh3.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
    },
    {
      id: 2,
      text: 'Go to the car wash',
      isComplete: false,
      linkPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1200px-Firefox_Logo%2C_2017.svg.png',
    },
    {
      id: 3,
      text: 'Book reading',
      isComplete: false,
      linkPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png',
    },
  ]);
  const [word, setWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  ///-------- Handle Function --------///
  const isComplete = index => {
    const newtodo = [...todos];
    newtodo[index].isComplete = true;
    setTodos(newtodo);
  }
  const toRemove = index => {
    const newtodo = [...todos]
    newtodo.splice(index, 1);
    setTodos(newtodo);
  }
  const toAdd = (text) => {
    const newtodo = [...todos, {
      id: todos.length + 1,
      text: text,
      isComplete: false,
      linkPic: '',
    }];
    setTodos(newtodo);
  }
  const toSearch = searchValue => {
    setWord(searchValue);
  }
  useEffect(() => {
    const results = todos.filter(todo => todo.text.toLowerCase().includes(word));
    setSearchResults(results);
    console.log('results: ', results);
  }, [word]);
  ///-------- Return App --------///
  return (
    <div className="app">
      <div className="header"><p>(( To-Do list -- Add, Edit, Delete))</p></div>
      <div className="todo-list">
        <SearchBar toSearch={toSearch}/>
        {
          searchResults.map((todo, index) =>
            <TodoList
              key={index}
              index={index}
              todo={todo}
              isComplete={isComplete}
              toRemove={toRemove}
            />
          )
        }
        <AddTodo toAdd={toAdd}/>
      </div>
      {console.log('Todos: ', todos)}
    </div>
  );
}

export default App;
