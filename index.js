require('dotenv').config()
const express = require('express')
const app = express()


app.set('view engine', 'js'); // Use 'js' instead of 'jsx'
app.engine('js', require('express-react-views').createEngine());


app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
})
  

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)
