const items = require("../model/market.model");

function getAllItems(req, res) {
    res.send(items)
};

function addNewItems(req, res) {
    let newItem = req.body;
    items.push(newItem);
    res.send(newItem);
};

function getMarketById(req, res) {
    let { id } = req.params;

    if (items[id - 1] != undefined) {
        res.send(items[id - 1]);
    } else {
        res.send(`${id} not found`)
    }
}


// function getMarketById(req, res) {
//     let { itemName } = " " +req.params;
// console.log(itemName);
//     if (itemName != undefined) {
//         res.send(items[itemName]);
 
//     } else {
       
//         res.send(`${itemName} not found`)
//     }
// }


function deleteMarket(req, res) {
    let { id } = req.params;

    if (items[id - 1] != undefined){
     items.splice(id-1, 1);
        res.send(`${id} deleted`);
    }else{
        res.send(`${id} not found`)
    }

}

module.exports = {
    getAllItems,
    addNewItems,
    getMarketById,
    deleteMarket
}