const express = require('express');
const passport = require('passport');
const connectDB = require('./connectdb/connectdb');
const app = express();
require('dotenv').config();
const fileUpload = require('express-fileupload');
const router = require('./router/handler');
const port = process.env.PORT || 3000
const bodyPaser = require("body-parser");



app.use(express.json());
app.use(fileUpload());

app.use(bodyPaser.urlencoded({extended:false}))
app.use(passport.initialize());
app.use('/uploads', express.static(__dirname + '/upoads'))
app.use('/', router);
app.get('/', (req, res) => {
    res.send('Hello World')
});
app.use('/', router);


app.listen(port, () => {
    connectDB()
    console.log(`Server started on port ${port}`);
});