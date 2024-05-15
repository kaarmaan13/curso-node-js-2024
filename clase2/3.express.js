const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// TODO ESTO ⤵️⤵️ EN EXPRESS SE CAMBIA POR
// app.use(express.json())
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  // escuchar el elemento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutamos la request para meter la info en el body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body se debería enviar a una bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => { // use es como todo "*"
  res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
