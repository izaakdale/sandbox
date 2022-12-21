import React from 'react'
import { useState, useCallback } from 'react'

function UseCallbackEx() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some task'])
    }, [setTasks])

    return (
        <div>
            <Button addTask={addTask}/>
            {tasks.map((task, index) => (
                <p key={index}>
                    {task}
                </p>
            ))}
        </div>
    )
}

const Button = React.memo(({addTask}) => {
    console.log('render');
    return <div className="">
        <button className='btn btn-primary' onClick={addTask}>Add Task</button>
    </div>
})

export default UseCallbackEx