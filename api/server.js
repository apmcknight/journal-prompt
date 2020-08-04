const express = require('express');
const port = 8080;
const app = express();
const data = './db.json'

app.listen(port, () => {
    console.log("Server Running on port: " + port +"\nHit Control + C to quit process.");
});

// app.get('/', () => {
// })

app.use('/api', express.static(data));