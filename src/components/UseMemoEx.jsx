import React from 'react'
import { useState, useRef, useEffect, useMemo } from "react";

function UseMemEx() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    // const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number), [number]) 

    const renders = useRef(1)

    useEffect(() => {
      renders.current = renders.current + 1
    })
    
    const click = () => {
        setInc((prevState) => {
            console.log(prevState + 1);
            return prevState + 1
        })
    }

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />
            <h2 className="my-3">
                Sqrt of {number} is {sqrt}
            </h2>
            <button className='btn btn-primary' onClick={() => click()}>Re-render</button>
            <h3>
                Renders: {renders.current}
            </h3>
        </div>
    )
}

function getSqrt(number) {
    console.log('expensive function call');
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    return Math.sqrt(number)
}

export default UseMemEx