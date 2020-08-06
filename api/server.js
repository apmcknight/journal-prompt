const express = require('express');
const port = 8080;
const address = "192.168.1.2";
const cors = require('cors');
const app = express();
const data = './db.json';


app.use(cors());

let corsOptions = {
    origin: 'http://192.168.1.2:8080',
    optionsSuccess: 200
}

// app.get('/api', (req, res, next) => {
//  res.json({msg: 'CORS is enabled'})
// })

app.listen(port, address, () => {
    console.log("Server Running on port: " + port +"\nHit Control + C to quit process.");
});

// app.get('/', () => {
// })

app.use('/api', express.static(data));