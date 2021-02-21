const express = require('express')
const app = express()
const port = 5000
var {sequelize, ceoUser} = require('./models/index')
sequelize.sync({ alter: false })
.then(()=> {
  console.log('Database Connected')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users/login',async (req, res) => {

  ceoUser.create({
    email: 'test2',
    username: 'test',
    password: 'test'
  })
  .then(()=>{
    console.log('success')
  })
  .catch(err=> {
    console.log('err발생')
  })
})

app.listen(port, () => {
  console.log(`server connected`)
})
