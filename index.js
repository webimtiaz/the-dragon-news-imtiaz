const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());

const Categoris = require('./data/Categoris.json')

app.get ('/', (req, res)=>{
    res.send ('dragon is running')
});
app.get ('/Categoris', (req, res)=>{
    res.send (Categoris)
});

app.listen(port, ()=>{
    console.log(`dragon the runnning: ${port}`)
});