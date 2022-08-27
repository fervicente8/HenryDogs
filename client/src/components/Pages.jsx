import React from 'react'
import styles from "./Pages.module.css"

const Pages = ({dogsPerPage, allDogs, pages}) => {
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul className={styles.paginado}>
        {
            pageNumbers?.map(num => {
                return (
                <li key={num}>
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