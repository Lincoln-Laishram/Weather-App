import { FaBeer, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState, useRef } from "react"
import { useEffect } from "react";
export function Toggle() {
    let handleTime
    const [isToggled, setToggle] = useState(false)
    const SetTime = useRef(null)
    const HandleToggle = () => {
        setToggle(prevState => !prevState)
    }
    useEffect({
        handleTime:setTimeout(() => {
            console.log('Hi after 2 second...');
        }, 2000)
    }

    )
    return (
        <>
            <button onClick={HandleToggle}>
                <FaArrowDown />
            </button>
            <h1>{isToggled ? 'Not Toggled' : 'Is Toggled'}</h1>
            <div ref={SetTime}></div>
        </>
    )
}