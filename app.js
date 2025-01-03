const express = require('express')

// init app & middleware

const app = express();

app.listen(3000, () => {
    console.log('app is listening on port 3000');
    
})

//routes

app.get('/books', (req, res) => {
    res.json({mssg: 'Welcome to the API'})
})

//continue with #4 @ 4:35
