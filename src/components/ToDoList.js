import React from "react";
import Task from './Task';

const ToDoList = ({tasks, clear}) => {
    return (
        <div className="listContainer">
            {tasks.map(task => {
                return (
                    <Task task={task}/>
                )
            })}
            <button className='clear' onClick={clear}>CLEAR</button>
        </div>
    );
 };
  
 export default ToDoList;