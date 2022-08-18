import React, { useState, useEffect} from 'react';
import ToDoList from "../components/ToDoList";
import TaskForm from '../components/TaskForm';
import formatDate from '../components/FormatDate';
import data from "../test.json"


function EventsPage() {
    //const [list, setList] = useState(data);

    const [list, setList] = useState(() => {
        const saved = localStorage.getItem("list");
        const initialValue = JSON.parse(saved);
        return initialValue || data;
    })
    // const [list, setList] = useState((data) => {
    //     // const saved = localStorage.getItem("list");
    //     // const initialValue = JSON.parse(saved);
    //     // return initialValue || data;
    //     return data;
    //   });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
      }, [list]);

    
    // useEffect(() => {
    //     localStorage.clear();
    // })

    const addTask = (userInput) => {
        if (userInput)
        {
            const today = new Date();
            today.setDate(today.getDate() + 7);
            const newTask = {
                id: list.length + 1,
                text: userInput,
                date: formatDate(today)
                
            }
            setList([...list, newTask]);
        }
        
    }

    const clear = () => {
        setList([]);
      }

    return(
        <div className='flexbox'>
            <TaskForm addTask={addTask} />
            <ToDoList tasks={list} clear={clear}/>
        </div>
    )
}

export default EventsPage;