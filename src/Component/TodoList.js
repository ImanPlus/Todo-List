import React from "react";

export default function TodoList({index, todo, isComplete}) {
  return (
    <div className="todo">
      <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
        {todo.text}
      </div>
      {console.log('isComplete: ', todo)}
      <button onClick={() => {
        isComplete(index)
      }}>Complete
      </button>
    </div>
  )
}