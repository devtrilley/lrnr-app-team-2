const express = require("express");
const cors = require('cors')
const axios = require('axios')
const dotenv = require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3000;

// EXPRESS MIDDLEWARE

// Middleware converting fetched data to JSON
app.use(express.json());

// Middleware for client/server communication
app.use(cors());

// Sample home endpoint to test server
app.get('/', (req, res)=>{
  res.send('Home endpoint, start working :)')
})


app.listen(PORT, () => console.log(`Server is live @ http://localhost:${PORT}`))