const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const ownerRoute = require('./routes/ownerRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')

const ejs = require('ejs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('./config/mogoose-connection')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.use('/owner',ownerRoute)
app.use('/users',userRoute)
app.use('/products',productRoute)
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})