import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { getNameDogs } from "../actions"

const NavBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div>
            <h1>Dogs App</h1>
            <div>
                <input onChange={e => handleInputChange(e)} type="text" placeholder='Search for a breed (Ej. Labrador Retriever)'/>
                <button onClick={e => handleSubmit(e)} type='submit'>🔍︎</button> 
            </div>
            <Link to= "/createdog"><button>Create dog</button></Link>
        </div>
    )
}

export default NavBar