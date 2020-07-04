import React from "react";

export default function TodoList({index, todo}) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}