const express = require('express')
const  { graphqlHTTP } = require('express-graphql')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 8000
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Console running on port ${port}`))