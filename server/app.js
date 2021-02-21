const express = require('express')
const app = express()
const port = 3000

const {Sequelize} =require('sequelize');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server connected`)
})
