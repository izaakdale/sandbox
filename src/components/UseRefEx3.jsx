import React from 'react'
import ToDo from './ToDo'
import { useState } from 'react'

function UseRefEx3() {
    const [showToDo, setShowToDo] = useState(true)

    return (
        <div>
            {showToDo && <ToDo/>}
            <button className="btn btn-primary" onClick={() => {setShowToDo(!showToDo)}}>Toggle to do</button>
        </div>
    )
}

export default UseRefEx3