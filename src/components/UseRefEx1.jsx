import React from 'react'
import { useRef } from 'react'

function UserRefEx1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = "Hello"
        inputRef.current.style.backgroundColor = 'red'

        paraRef.current.innerText = "New Hello P"
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" ref={inputRef} id="name" className='form-control mb-2' />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <p onClick={() => {inputRef.current.focus()}} ref={paraRef}>Hello P</p>
            </form>
        </div>
    )
}

export default UserRefEx1