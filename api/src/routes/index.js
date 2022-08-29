const express = require("express");
const { Dog, Temperament } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllDogs, getTemps } = require("../controllers/dogControllers");

const router = express();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async (req, res) => {
  const breed = req.query.name;
  let allDogs = await getAllDogs();

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
  } = req.body;

  const createDog = await Dog.create({
    name,
    min_weight,
    max_weight,
    min_height,
    max_height,
    life_span,
    image,
    createdInDb,
  });

  const temperamentDb = await Temperament.findAll({
    where: { name: temperament },
  });

  createDog.addTemperament(temperamentDb);
  res.status(200).send("Dog created successfully");
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
