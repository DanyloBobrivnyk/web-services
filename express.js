const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/soap', function (req, res) {
  res.send('Got a POST request from soap route')
})
app.post('/rest', function (req, res) {
  res.send('Got a POST request from rest route')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})