import React from 'react'
import "./Pages.css"

const Pages = ({dogsPerPage, allDogs, pages}) => {
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul className='pages'>
        {
            pageNumbers?.map(num => {
                return (
                <li className='number' key={num}>
                    <a onClick={() => pages(num)}>{num}</a>
                </li>
                )
            }) 
        }
        </ul>
    </nav>
  )
}

export default Pages