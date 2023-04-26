const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const port = 8000;
const db = require('./config/mongoose')
const TodoLists = require("./models/todo_list")
const app = express(); 
app.use(express.urlencoded()) 
app.use('/',require('./routes'))
app.use(express.static('./assets')) 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views')
app.listen(port,function(err){
    if(err){
     console.log(`Error in running server:  ${err}`);
    }
    console.log(` yup !!!!!Server is running on port :  ${port}`);
 
 
 });