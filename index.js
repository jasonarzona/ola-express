const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Wassup Beep!')
})

app.get('/about', (req, res) => {
  res.send('This is our about page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})