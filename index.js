const express = require('express')
const ejs=require('ejs')
const app = express()
const port = 3000

let callback=(req, res)=>{
    let html='<b>oso</b>'
    let data={
        title:'frase aleatoria'
    }
    let options={
        
    }

    let pagina=ejs.render(html, data, options);
    res.send(pagina)
}

app.get('/', callback)

app.post('/', (req, res) => {
    res.send('El lobo dice auu!')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})