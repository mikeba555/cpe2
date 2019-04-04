const express = require('express')
const app = express()
const port = 8022

app.get('/', (req, res) =>
  res.send('Greetings from Wirot')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
