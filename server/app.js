const express = require('express')
const app = express()
const port = 3000
var {sequelize} = require('./models/index')
sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server connected`)
})
