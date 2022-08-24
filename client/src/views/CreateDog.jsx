import React from 'react'
import { useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postDog, getTemperaments } from '../actions/index'

const validate = (input) => {
  const errors = {state: true}
  const onlyWords = new RegExp(/^[a-zA-Z\s]*$/g)
  const onlyNumbers = new RegExp(/^[-+]?[0-9]+$/)

  if(!input.name){
    errors.name = "This space cannot be empty"
    errors.state = false
  } else if(onlyWords.test(input.name) === false || input.name.length < 5 || input.name.length > 50){
    errors.name = "The name cannot contain symbols or numbers, and must be between 5 and 50 characters long"
    errors.state = false
  } 

  if(!input.min_weight || !input.max_weight){
    errors.weight = "This space cannot be empty!"
  } else if(onlyNumbers.test(input.min_weight) === false || onlyNumbers.test(input.max_weight) === false || Number(input.min_weight) < 1 || Number(input.min_weight) > 100 || Number(input.max_weight) < 1 || Number(input.max_weight) > 100){
    errors.weight = "The weight cannot contain symbols or letters, and must be between 1 and 100"
  } else if(Number(input.min_weight) > Number(input.max_weight) || input.min_weight.charAt(0) === "0" || input.max_weight.charAt(0) === "0"){
    errors.weight = "The minimum weight cannot be greater than the maximum and cannot start at 0"
    errors.state = false
  } 

  if(!input.min_height || !input.max_height){
    errors.height = "This space cannot be empty!"
    errors.state = false
  } else if(onlyNumbers.test(input.min_height) === false || onlyNumbers.test(input.max_height) === false || Number(input.min_height) < 5 || Number(input.min_height) > 120 || Number(input.max_height) < 5 || Number(input.max_height) > 120){
    errors.height = "The height cannot contain symbols or letters, and must be between 5 and 120"
    errors.state = false
  } else if(Number(input.min_height) > Number(input.max_height) || input.min_height.charAt(0) === "0" || input.max_height.charAt(0) === "0"){
    errors.height = "The minimum height cannot be greater than the maximum and cannot start at 0"
    errors.state = false
  } 

  if(!input.life_span){
    errors.life_span = "This space cannot be empty!"
    errors.state = false
  } else if(input.life_span.charAt(0) === "0"){
    errors.life_span = "The life span cannot start at 0"
    errors.state = false
  } else if(onlyNumbers.test(input.life_span) === false || Number(input.life_span) < 1 || Number(input.life_span) > 20){
    errors.life_span = "The life span cannot contain symbols or letters, and must be between 1 and 20"
    errors.state = false
  } 
  
  if(Object.keys(input.temperament).length === 0){
    errors.temperament = "You have to choose at least one temperament"
    errors.state = false
  }

  if(input.image === ""){
    input.image = "https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,f_auto,q_80/mascotas/c-postedin-image-50106.jpeg"
  }

  return errors
}

const CreateDog = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allTemperaments = useSelector(state => state.temperaments)

    useEffect(() => {
      dispatch(getTemperaments())
  }, [dispatch])

    const [input, setInput] = useState({
        name: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        life_span: "",
        temperament: [],
        image: ""
    })
    
    const [errors, setErrors] = useState({})

    function handleChange(el){
      setInput({
        ...input,
        [el.target.name]: el.target.value
      })
      setErrors(validate({
        ...input,
        [el.target.name]: el.target.value
      }))
      console.log(input); // Borrarararaarraaaaaaaaaaaaaaaaaaaaaadoisjadoijsaoijsaoidjasasddas
    }

    function handleSelected(el){
      setInput({
        ...input,
        temperament: [...input.temperament, el.target.value]
      })
    }

    function removeTemp(el){
      setInput({
        ...input,
        temperament: input.temperament.filter(e => e !== el)
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      setErrors(validate(input))
      if(errors.state === true){
        dispatch(postDog(input))
        setInput({
          name: "",
          min_weight: "",
          max_weight: "",
          min_height: "",
          max_height: "",
          life_span: "" + "years",
          temperament: [],
          image: ""
        })
        history.push("/createdsuccessfully") 
      }
    }

  return (
    <div>
        <Link to= "/home"><button>Home</button></Link>
        <h1>Create your dog</h1>
        <form onSubmit={handleSubmit}>

          <label>Breed name</label>
          <input type="text" value={input.name} name="name" onChange={handleChange}/>
          <p className='error'>{errors.name}</p>

          <h2>Weight</h2>
          <label>Min</label>
          <input type="text" value={input.min_weight} name="min_weight" onChange={handleChange}/>
          <label>Max</label>
          <input type="text" value={input.max_weight} name="max_weight" onChange={handleChange}/>
          <p className='error'>{errors.weight}</p>

          <h2>Height</h2>
          <label>Min</label>
          <input type="text" value={input.min_height} name="min_height" onChange={handleChange}/>
          <label>Max</label>
          <input type="text" value={input.max_height} name="max_height" onChange={handleChange}/>
          <p className='error'>{errors.height}</p>

          <label>Life span</label>
          <input type="text" value={input.life_span} name="life_span" onChange={handleChange}/>
          <p className='error'>{errors.life_span}</p>

          <div>
            <label>Choose the temperaments</label>
            <select onChange={handleSelected}>
              <option value=""></option>
            {
              allTemperaments.map(el => {
                return <option value={el.name}>{el.name}</option>
              })
            }
            </select>
            <p className='error'>{errors.temperament}</p>
            <div>
              <ul>
              {input.temperament.map(el => {
                return <li onClick={() => removeTemp(el)}>{el}</li>
              })
              }

            </ul>
              <p>*Click on the temperament to delete it*</p>
            </div>
          </div>

          <label>Image</label>
          <input type="text" value={input.image} name="image" onChange={handleChange}/>
          <p>*If you don't upload an image, a random one will be uploaded*</p>

          <button type='submit'>Create 🐶</button>
        </form>
    </div>
  )
}

export default CreateDog