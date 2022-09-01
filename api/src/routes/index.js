const express = require("express");
const { Dog, Temperament } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllDogs, getTemps } = require("../controllers/dogControllers");
const { default: axios } = require("axios");

const router = express();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async (req, res) => {
  const breed = req.query.name;
  let allDogs = await getAllDogs();

  // if (breed) {
  //   let dogBreed = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
  //   console.log(dogBreed.data);
  //   if (dogBreed.data.length > 0) {
  //     res.status(200).send(dogBreed.data);
  //   } else {
  //     res.status(404).send("Dog not found");
  //   }
  // } else {
  //   res.status(200).send(allDogs);
  // }

  if (breed) {
    let dogBreed = await allDogs.filter((el) =>
      el.name.toLowerCase().includes(breed.toLowerCase())
    );
    if (dogBreed.length > 0) {
      res.status(200).send(dogBreed);
    } else {
      res.status(404).send("Dog not found");
    }
  } else {
    res.status(200).send(allDogs);
  }
});

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  let allDogs = await getAllDogs();
  if (id) {
    let dogById = await allDogs.filter(
      (el) => el.id.toString().toLowerCase() === id.toString().toLowerCase()
    );
    if (dogById.length > 0) {
      res.status(200).send(dogById);
    } else {
      res.status(404).send("Breed not found");
    }
  } else {
    res.status(400).send("Missing ID");
  }
});

router.post("/dogs", async (req, res) => {
  const {
    name,
    min_weight,
    max_weight,
    min_height,
    max_height,
    life_span,
    temperament,
    image,
    createdInDb,
    origen
  } = req.body;

  
  try {
    const createDog = await Dog.create({
      name,
      min_weight,
      max_weight,
      min_height,
      max_height,
      life_span: life_span + " years",
      image,
      createdInDb,
      origen
    });

    const temperamentDb = await Temperament.findAll({
      where: { name: temperament },
    });

    createDog.addTemperament(temperamentDb);
    res.status(200).send("Dog created successfully");
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/temperaments", async (req, res) => {
  try {
    let allTemps = await getTemps();
    res.send(allTemps);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
