const express = require('express');
const app = express();

const PORT = 8000

const singers = {
    'lady gaga': {
        'age': 37,
        'birthName': 'Stefani Joanne Angelina Germanotta' ,
        'birthLocation': 'New York City, US',
    },
    'lp': {
        'age': 42,
        'birthName': 'Laura Pergolizzi' ,
        'birthLocation': 'Long Island, New York, U.S',
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown' ,
        'birthLocation': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const singerName = req.params.name.toLowerCase().trim()
    console.log(singerName)
    if(singers[singerName]) {
        res.json(singers[singerName])
    } else {
        res.json(singers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta go catch it`)
})