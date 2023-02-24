require('dotenv').config()
require('express-async-errors')

const express = require('express');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const app = express();
const productsRouter = require('./routes/products')

// middleware
app.use(express.json())

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><br><a href="/api/v1/product">All Products</a>')
})

app.use('/api/v1/products', productsRouter)


app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000 

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()