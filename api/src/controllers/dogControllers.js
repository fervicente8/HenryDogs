const {API_KEY} = process.env
const axios = require('axios')
const { Dog, Temperament } = require('../db')

const getApiInfo = async () => {
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    const dogApiInfo = await api.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            min_weight: el.weight.metric.slice(0, 2).trim(),
            max_weight: el.weight.metric.slice(4).trim(),
            min_height: el.height.metric.slice(0, 2).trim(),
            max_height: el.height.metric.slice(4).trim(),
            life_span: el.life_span,
            temperament: el.temperament,
            image: el.image.url,
        }
    });

    return dogApiInfo;
}

const getDbInfo = async () => {
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
}

module.exports = getAllDogs