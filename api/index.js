const express = require('express');
const db = ('./db.json');
// const routes = require('./public/routes/apiRoutes');

const app = express();

app.get('/', function (req, res){
    
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server Running on port ${port}...`));