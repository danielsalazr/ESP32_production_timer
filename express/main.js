const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //const nombre = req.query.nombre || 'Mundo'
    const value = req.query.tiempo;
    const id = req.query.id;
    console.log(`dispositivo ${id}, el timepo fue ${value/1000} segundos`);

  res.send('¡Hola, mundo!')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})