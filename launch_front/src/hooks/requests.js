const API_URL = 'http://localhost:8080';
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
return await response.json()
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
 const fetchedLaunches = await response.json();
 return fetchedLaunches.sort((a,b) => {
  return a.flightNumber - b.flightNumber;
 })
}

async function httpSubmitLaunch(launch) {
  try {
    const x = await fetch(`${API_URL}/launches` , {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
      body:JSON.stringify(launch)
    })
    return x;
    } catch (error) {
    return{
      ok:false
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    const response = await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
})
return response;
  } catch (error) {
    console.error(error);
    return{
      ok: false
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};  