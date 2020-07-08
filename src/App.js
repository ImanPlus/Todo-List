import React, {useEffect, useState} from 'react';
import './css/App.css';

import TodoList from './Component/TodoList';
import AddTodo from "./Component/AddTodo";
import SearchBar from "./Component/SearchBar";
import DisplayImage from "./Component/Display Image";

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
  const [url, setUrl] = useState('');
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
    }]
    setTodos(newtodo);
  }
  const toSearch = searchValue => {
    setWord(searchValue);
  }
  const toEdit = content => {
    const newtodo = [...todos];
    newtodo[content.index].text = content.text;
    setTodos(newtodo);
  }
  const toUrlImage = urlImage => {
    setUrl(urlImage);
  }
  ///-------- Return App --------///
  return (
    <div className="app">
      <div className="header"><p>(( To-Do list -- Add, Edit, Delete, Search))</p></div>
      <div className="todo-list">
        <SearchBar toSearch={toSearch}/>
        {todos.filter((todo) => {
          if (!word || word.length < 1) {
            return true
          }
          return todo.text.toLowerCase().includes(word)
        })
          .map((todo, index) =>
            <TodoList
              key={index}
              index={index}
              todo={todo}
              isComplete={isComplete}
              toRemove={toRemove}
              toEdit={toEdit}
              toUrlImage={toUrlImage}
            />
          )
        }
        <AddTodo toAdd={toAdd}/>
      </div>
      {console.log('Todos: ', todos)}
      {url ? <DisplayImage toUrl={url}/> : ''}
    </div>
  );
}

export default App;
