import React from "react";
import {Paper} from '@material-ui/core';

export default function DisplayImage({toUrl}) {
  return(
    <Paper elevation={3} className="todo-list" style={{ marginTop: 10 }} >
      <div className="todo">
        <img src={toUrl} alt={toUrl} width="200" height="210"/>
      </div>
    </Paper>
  )
}