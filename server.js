const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil router
const router = require('./router')
router(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});