const express = require('express')
const app = express()
const port = 3000

let callback=(req, res)=>{


    res.send(pagina)
}

app.get('/', callback)

app.post('/', (req, res) => {
    res.send('El lobo dice auu!')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})