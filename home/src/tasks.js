import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function Tasks() {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // setState used to merge new values into existing state object 
    // if there were keys whos values had not changed, there would be
    // no need to replace the existing values at those keys
    
    // The new setter functions on useState replace the entire value
    // under the hood 

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([ ...tasks, { taskText, id: uuid() } ])
        setTaskText('');
    }

    const completeTask = completedTask => () => {
        setCompletedTasks([ ...completedTasks, completedTask ]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
    }

    const deleteTask = deletedTask => () => {
        setCompletedTasks(completedTasks.filter(completedTask => completedTask.id !== deletedTask.id));
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className="form">
                <input value={ taskText } onChange={ updateTaskText } />
                <button onClick={ addTask }>Add Task</button>
            </div>
            <div className="task-list">
                {
                    tasks.map(task => {
                        const { id, taskText } = task;
                        return (
                            <div key={ id } onClick={ completeTask(task) }>
                                { taskText }
                            </div>
                        )
                    })
                }
            </div>
            <div className="completed-list">
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;

                        return (    
                            <div key={ id }>
                                { taskText }{' '}
                                <span onClick={ deleteTask(task) } className="delete-task">x</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks;