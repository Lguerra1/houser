const express = require ('express')
const bodyParser = require ('body-parser')
const Controller = require ('./Controller')

const app = express()



const port = 4000;
app.listen(port, ()  =>
console.log (`Battle Cruiser Operation on ${port}`))

