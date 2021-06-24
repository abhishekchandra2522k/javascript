//  MVC Pattern - Model Views Controller (Controller mediates b/w the model and view)

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

// view engine
app.set("view engine","ejs");
// app.set("views", path.resolve(__dirname,"view/ejs"))

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/', (req, res)=>{
    res.send("Crud Application");
})

app.listen(PORT,()=>{console.log(`Server is running on https://localhost:${PORT}`)});