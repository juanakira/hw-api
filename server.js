
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
const data = require('./data.js')

app.use(cors())

console.log(data.name)

// Get requests

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:brand', (request, response) => {
    const brand = request.params.brand.toLowerCase()
    console.log(brand)
    response.json(data[brand].models || data['unknown'] )
} )

// Listen to requests
app.listen(process.env.PORT || PORT , () => {
    console.log(`server's set up on port ${PORT}`)
})

