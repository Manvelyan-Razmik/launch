// const launches = new Map();
// let latestFlightNumber =100;
                    
// const launch = {
//     flightNumber: 100,
//     missiion: 'Kepler Exploration X',
//     rocket: 'Explorer ISl',
//     launchDate: new Date('December 27, 2030'),
//     destination: 'Kepler-442 b',
//     customer: ['ZTM, NASA'],
//     upcoming: true,
//     succes: true
// }

// launches.set(launch.flightNumber, launch);
// function addNewLaunch(launch){
//     latestFlightNumber++;
//     launches.set(latestFlightNumber,    
//         Object.assign(launch,{
//             success:true,
//             upcoming:true,
//             customers:['Zero to Mastery', 'NASA'],
//             flightNumber:latestFlightNumber
//         }))
// }


// module.exports = {
//     launches,
//     addNewLaunch
// }




const launches = new Map();
let latestFlightNumber = 100
const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM, NASA'],
    upcoming: true,
    succes: true
}

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
    latestFlightNumber++
    launches.set(latestFlightNumber,
        Object.assign(launch, {
            success:true,
            upcoming: true,
            customers: ['Zero To mastery','NASA'],
            flightNumber:latestFlightNumber
        }))
}

function existLaunches (launchID) {
    return launches.has(launchID)
}

function abortLaunchByID (launchID) {
    const aborted = launches.get(launchID) 
    aborted.upcoming = false
    aborted.success = false
    return aborted
}

module.exports = {
    launches,
    addNewLaunch,
    existLaunches,
    abortLaunchByID
}