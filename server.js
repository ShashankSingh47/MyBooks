if (process.env.NODE_ENV !== 'production'){
    require('dotenv').load
}

const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/author')

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb', extended: false}))

require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error=> console.log(error))
db.once('open', ()=> console.log('Connected to mongoose'))



app.use('/', indexRouter)
app.use('/author', authorRouter)
app.listen(process.env.PORT || 3000)
