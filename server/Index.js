require ('dotenv').config();
const express = require ('express')
const bodyParser = require ('body-parser')
const Controller = require ('./Controller')
const massive = require ('massive')



const app = express()

app.get('/api/casa', )



massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

const port = 4000;
app.listen(port, ()  =>
console.log (`Battle Cruiser Operation on ${port}`))

