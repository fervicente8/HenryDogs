import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions/index'


const DogDetails = (e) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(e.match.params.id))
  }, [dispatch])

  const dogDetails = useSelector((state) => state.detail)
  

  return (
    <div>
      <h1>{}</h1>
    </div>
  )
}

export default DogDetails