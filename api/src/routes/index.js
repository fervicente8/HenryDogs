const express = require('express')
const {API_KEY} = process.env
const axios = require('axios')
const { Dog, Temperament } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllDogs  = require('../controllers/dogControllers')

const router = express();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async (req, res) => {
    const breed = req.query.name
    let allDogs = await getAllDogs();

    if(breed){
        let dogBreed = await allDogs.filter(el => el.name.toLowerCase().includes(breed.toLowerCase()))
        if(dogBreed.length > 0){
            res.status(200).send(dogBreed)
        } else {
            res.status(404).send("Dog not found")
        }
    } else {
        res.status(200).send(allDogs)
    }

})

router.get('/dogs/:id', async (req, res) => {
    const { id } = req.params
    let allDogs = await getAllDogs();

    if(!id){
        res.status(400).send("Missing ID")
    } else {
        let dogById = await allDogs.find((el) => el.id === id)
        if(dogById.length > 0){
            res.status(200).send(dogById)
        } else {
            res.status(404).send("Breed not found")
        }
    }
})

router.post('/dogs', async (req, res) => {
    const {
        name,
        min_weight,
        max_weight,
        min_height,
        max_height,
        life_span,
        temperament,
        image
    } = req.body;

    const createDog = await Dog.create({
        name: name,
        min_weight: min_weight,
        max_weight: max_weight,
        min_height: min_height,
        max_height: max_height,
        life_span: life_span,
        image: image
    });

    const temperamentDb = await Temperament.findAll({
        where: { name: temperament}
    })
    createDog.addTemperament(temperamentDb)
    res.status(200).send("Dog created successfully")
    
});

router.get('/temperaments', async (req, res) => {
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    const temperamentApiInfo = await api.data.map(el => el.temperament ? el.temperament : "Temperament not found").map(el => el.split(", ")).flat()

    const temperaments = [...new Set(temperamentApiInfo)]
    temperaments.forEach(el => {
        Temperament.findOrCreate({
            where: { name: el}
        })
    })

    const allTemperaments = await Temperament.findAll()
    res.send(allTemperaments) 
})

module.exports = router;
