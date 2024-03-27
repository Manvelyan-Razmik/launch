const http  =require('http');
const app = require('./app');
const {loadPlanetsData} = require('./model/planets.model');
const dotenv = require('dotenv');
dotenv.config();
const PORT  = process.env.PORT || 8080;

const server = http.createServer(app);
async function startServer(){
await loadPlanetsData();

server.listen(PORT , () =>  {
    console.log(`Server listening on ${PORT} port...`);
});
}
startServer();

