const express = require('express')
const app = express()
const port = 3000; 
const path = require('path');


app.use('/', require ('./route'));

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
 
  app.listen(3000, ()=> {
        console.log(`Server is running on http://localhost:${3000}`)});