import React from "react";

export default function TodoList({index, todo, isComplete, toRemove}) {
  return (
    <div className="todo">
      <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
        {todo.text}
      </div>
      {console.log('isComplete: ', todo)}
      <div>
        <button className="button" onClick={() => {
          isComplete(index)
        }}>Complete
        </button>
        <button className="button" onClick={() => {
          toRemove(index)
        }}>Remove
        </button>
      </div>

    </div>
  )
}