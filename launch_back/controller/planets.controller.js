const {planets} = require('../model/planets.model')

function getAllPlanets(req, res) {
    // res.setHeader('')
    return res.send(planets)
};

function addNewPlanets(req,res){
    const newPlanets =req.body;
    
    planets.push(newPlanets);
    return res.send(newPlanets);

};
function deletePlanetsById(req,res){
    const {id} = req.params;
    planets.shift(0,id);
    return res.send(planets)
}

module.exports = {
    getAllPlanets,
    addNewPlanets,
    deletePlanetsById,
}