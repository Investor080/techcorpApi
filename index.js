const express = require('express');
const passport = require('passport');
const connectDB = require('./connectdb/connectdb');
const app = express();
require('dotenv').config();
const router = require('./router/handler');
const port = process.env.PORT || 3000
const bodyPaser = require("body-parser")



app.use(express.json());

app.use(bodyPaser.urlencoded({extended:false}))
app.use(passport.initialize());
app.get('/', (req, res) => {
    res.send('Hello World')
});
app.use('/api/v1', router);


app.listen(port, () => {
    connectDB()
    console.log(`Server started on port ${port}`);
});