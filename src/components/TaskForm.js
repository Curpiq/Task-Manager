import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskForm = ({addTask}) => {

    const [ taskText, setTaskText ] = useState('');

    const onChange = (event) => {
        setTaskText(event.currentTarget.value);
    }
    
    const Submit = (event) => {
        event.preventDefault();
        addTask(taskText);
        setTaskText("");
    }
    
    return (
        <>
        <form className='taskForm' onSubmit={Submit}>
            <input className='taskInput' value={taskText} onChange={onChange} type="text" placeholder="Enter task..." maxLength="240"/>
            <button className='addTask'>
            <FontAwesomeIcon className='plusIcon' icon={faPlus} />
            </button>
        </form>
        </>
    );
};

export default TaskForm;