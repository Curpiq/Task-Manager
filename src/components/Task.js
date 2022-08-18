import React from "react";
import formatDate from "./FormatDate";

const Task = ({task}) => {


    // const getTaskDate = ({task}) => {
    //     let date = task.date;
    //     let splitDate = date.split('.');
    //     let d = Number(splitDate[0]);
    //     let m = Number(splitDate[1]);
    //     let y = Number(splitDate[2]);
    //     return [d, m, y];
    // }

    // const isOver = ({task}) => {
    //     let now = getCurrentDate();
    //     let taskDate = getTaskDate({task});

    //     if (taskDate[0] < now[0] || taskDate[1] < now[1] ||taskDate[2] < now[2])
    //     {
    //         return true;
    //     }
    //     else { return false; }
    // }
    
    const isOver = ({task}) => {
        let now = formatDate(new Date());
        let taskDate = task.date;
        if (taskDate < now) {
            return true;
        } else {return false; }
    }
    return (
        <div className={isOver({task}) ? "isOverColor task" : "task"}>
            <div className="taskInfo text">
                {task.text}
            </div>
            <div className="taskInfo date">
                {task.date}
            </div>
        </div>
    );
 };
  
 export default Task;