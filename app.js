const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const morgan =require('morgan');
const expHbs=require('express-handlebars');

app.use(morgan('dev'));

app.engine('.hbs', expHbs({defaultLayout: 'mainLayout',extname:'.hbs'}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./controllers/home'))

module.exports=app;