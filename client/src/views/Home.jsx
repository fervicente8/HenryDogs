import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { getDogs, getTemperaments, filterDogByTemperaments, filterDogByCreated, orderByName, orderByWeight } from "../actions"
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Pages from '../components/Pages'

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.dogs)
    const allTemperaments = useSelector(state => state.temperaments)
    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden] = useState()
    const dogsPerPage = 8
    const lastDog = currentPage * dogsPerPage
    const firstDog = lastDog - dogsPerPage
    const currentDogs = allDogs.slice(firstDog, lastDog)
    
    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])

    function handleRestart(e){
        e.preventDefault()
        dispatch(getDogs())
        setCurrentPage(1)
        console.log(allDogs);
    }

    function handleFilterTemperament(e){
        e.preventDefault();
        dispatch(filterDogByTemperaments(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterCreated(e){
        e.preventDefault();
        dispatch(filterDogByCreated(e.target.value))
        setCurrentPage(1)
    }

    function handleSortByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }

    function handleSortByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }

    function tempsToString(index){
        const temps = []
        for(let i = 0; i < index.length; i++){
            temps.push(" " + index[i].name)
        }
        return temps.toString().slice(1, undefined);
    }

    return (
        <div>
            <NavBar></NavBar>
            <button onClick={e => {handleRestart(e)}}>Restart dogs</button>
            <div>
                <div>
                    <p>Filter by</p>
                    <div>
                        <p>Temperament</p>
                        <select onChange={e => handleFilterTemperament(e)}>
                            <option value="all">All</option>
                        {
                            allTemperaments?.map(temp => {
                                return(
                                    <option value={temp.name}>{temp.name}</option>
                                    )
                                })
                        }
                        </select>
                    </div>
                    <div>
                        <p>Created</p>
                        <select onChange={e => handleFilterCreated(e)}>
                            <option value="all">All</option>
                            <option value="created">Created</option>
                            <option value="not-created">Not created</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>Order by name</p>
                    <select onChange={e => handleSortByName(e)}>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                    </select>
                </div>
                <div>
                    <p>Order by weight</p>
                    <select onChange={e => handleSortByWeight(e)}>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                    </select>
                </div>
            </div>
            <Pages dogsPerPage={dogsPerPage} allDogs={allDogs.length} pages={pages}/>
            {
                currentDogs?.map(el => {
                    if(el.temperaments){
                        return(
                            <Link to={`/home/ ${el.id}`}>  
                        <Card name={el.name} min_weight={el.min_weight} max_weight={el.max_weight} temperament={tempsToString(el.temperaments)} image={el.image}/>
                        </Link>
                        ) 
                    } else {
                        return(
                            <Link to={`/home/ ${el.id}`}>  
                        <Card name={el.name} min_weight={el.min_weight} max_weight={el.max_weight} temperament={el.temperament} image={el.image}/>
                        </Link>
                        ) 
                    }
                })
            }
        </div>
    )
}

export default Home