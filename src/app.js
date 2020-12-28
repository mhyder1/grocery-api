require('dotenv').config()
let express = require('express')
let morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
let { NODE_ENV } = require('./config')
const usersRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const categoriesRouter = require("./Categories/categories-router");
const listsRouter = require("./lists/lists-router")


const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';


app.use(morgan(morganOption))
app.use(helmet())
app.use(express.json());
app.use(usersRouter)
app.use("/api/auth/", authRouter);
app.use("/api/categories", categoriesRouter);
app.use ("/api/lists", listsRouter)


app.get('/api/gla', (req, res) => {
    res.send('Hello, world!')
})

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

app.use(cors())

module.exports = app