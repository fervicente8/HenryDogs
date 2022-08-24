import React from 'react'

const Card = ({name, min_weight, max_weight, temperament, image}) => {
  return (
    <div>
        <div>
            <img src={image} alt="Image not found" />
            <h1>{name}</h1>
        </div>
        <div>
            <h3>Weight</h3>
            <div>
                <p>Min:</p> 
                <p>{min_weight}</p>
                <p>Max:</p> 
                <p>{max_weight}</p>
            </div>
        </div>
        <div>
            <p>Temperament: {temperament}</p>
        </div>
    </div>
  )
}

export default Card