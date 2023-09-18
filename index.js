require('dotenv').config()
const express = require('express')
const app = express()


app.set('view engine', 'jsx'); // Use 'js' instead of 'jsx'
app.engine('jsx', require('express-react-views').createEngine());

console.log("In main indexjs before app use");
app.use('/places', require('./controllers/places'));
console.log("In main indexjs after app use");

// base or home
app.get('/', (req, res) => {
    res.render('home')
})

// invalid url
app.get('*', (req, res) => {
    res.render('error404')
  })
  
// moved this to the controller places.js
// index
//app.get('/places', (req, res) => {
    //res.render('places/index', {places})
   
//    console.log("In main indexjs calling the res service")
//    res.render('places/index', {places})
//})  

  
app.listen(process.env.PORT);
