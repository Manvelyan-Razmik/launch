const {launches,addNewLaunch, existLaunches, abortLaunchByID} = require('../model/launches.model');

 function getAllLaunches(req, res) {
    return  res.status(201).json(Array.from(launches.values()));
}

function addNewLaunches(req,res) {
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(404).json({
            error:"missing request launch property"
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(launch.launchDate.toString() === "invalid date") {
        return res.status(400).json({
            error:"invalid launch date"
        })
    }
    addNewLaunch(launch);
    return res.json(launch)
}

function getLaunchesById(req, res) {
    const { id } = req.params;
    const launch = launches.get(parseInt(id));
    if (launch != -1) {
        return res.send(launch);
    }
    return res.status(404).send({ message: 'Launch not found' });
}

function httpAbortLaunch(req,res) {
    const launchID = +req.params.id


    if(!existLaunches(launchID)) {
        return res.status(404
            ).json({
            err:"Launch not found"
        })
    }
    const aborted = abortLaunchByID(launchID)
    return res.json(aborted)
}



// function deleteLaunches(req,res){
//     const {id} = req.params;
//    launches.shift(0,id);
//     return res.send(planets)
// }

module.exports = {
    getAllLaunches,
    getLaunchesById,
    addNewLaunches,
    httpAbortLaunch
};

// hin
// const { launches ,addNewLaunch} = require("../model/launches.model");


// function getAllLaunches(req,res){
//     return res.status(200).json(Array.from(launches.values()))
// }; 


// function addNewLaunches(req, res) {
//     const launch = req.body;
//     console.log(req.body);
//     if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
//         return res.status(404).json({
//             error:'Missing required launch property'
//         })
//     }
//     launch.launchDate = new Date(launch.launchDate);
//     if(launch.launchDate.toString()==='Invalid Date'){
//         return res.status(400).json({
//             error:"Invalid launch Dare"
//         })
//     }
//     addNewLaunch(launch);
//     return res.status(201).json(launch)
//     }
    
//     function httpAbortLaunch(req,res) {
//         const launchID = req.params.id
    
//         if(existLaunches(launchID)) {
//             return res.status(404).json({
//                 err:"Launch not found"
//             })
//         }
//         const aborted = abortLaunchByID(launchID)
//         return res.json(aborted)
//     }

// module.exports = {

//     getAllLaunches,
//     addNewLaunches,
//     httpAbortLaunch
// }












// function getLaunchesById(req,res){

//         const {id} = req.params;
//         const index = array.findIndex((elem) => elem == array.array.)
//         // const launch =launch.launches.get(parseInt(id));
//         // if(!launch){}
//         // console.log(flightNumber);
//         // if(id == launc.launc.flightNumber){  
//     // return res.send(launches.get(100))
//     // console.log(array.array[flightNumber]);
//     // if(id == array.array[ flightNumber])
//            return res.send(array.array[id])
//             // console.log(id);
//             console.log(array.array[0]);
//         // launches.get(("/:id",launc))
       
//         // return res.send(launc)//.get(100))
//     }
//     // }

    // function getLaunchesById(req, res) {
    //     const { id } = req.params;
    //     const index = array.array.findIndex((elem) => elem.flightNumber == id);
    //     if (index != -1) {
    //         res.send(array.array[index]);
    //     }
    //     else {
    //         res.status(404).send(`The launc with ${id} flightNumber not found...`);
    //     }
    // }


//     for(key in newLaunches){                                          ////////menak arajinna
//     //    return res.send(key)
//         if(key ==  "flightNumber"){
//             array.array.push(newLaunches);
//             // launches.set(launc.flightNumber, launc);
            
        
//             return res.send(newLaunches);
//         }
//             return res.send(` grel  flightNumber`)
        
//     }


// function addNewLaunches(req, res) {
//     const {id} = req.body;
//     if (id ) {
//         const newLaunches = { id }
//         array.array.push(newFriend);
//         // res.send(newFriend);
//         array.array.forEach((elem, ind) => {
//             elem.id = ind + 1;
//         });
//         return res.status(201).send(newLaunches);
//     }
// }




// function deleteLaunches(req,res){
//     // const {id} = req.params;
//     // array.shift(0,id);
//     // return res.send(array);
//     const { id } = req.params;
//     const index = array.array.findIndex((elem) => elem.flightNumber == id);
//     if (index != -1) {
//         // res.send(array.array[index]);
//         array.array.splice(index,1);
//         res.send('jnjvac')
//     }
//     else {
//         res.status(404).send(`The launc with ${id} flightNumber not found...`);
//     }
// }

// module.exports = {
//     getAllLaunches,
//     // getLaunchesById,
//     addNewLaunches,
//     // deleteLaunches
// }