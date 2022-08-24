import React from 'react'
import { useHistory } from 'react-router-dom'

const Created = () => {
    const history = useHistory()

    function handleClick(e){
        e.preventDefault();
        history.push("/home") 
    }

    return (
        <div>
            <h1>Dog created successfully!</h1>
            <button onClick={handleClick}>Go home</button>
        </div>
    )
}

export default Created