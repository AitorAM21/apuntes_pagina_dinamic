const express = require('express')
const ejs=require('ejs')
const app = express()
const port = 3000

let callback=(req, res) =>{
    
    let queries={
      frase:'Yipikayei hdp',
      autor:'Bruce Willis'
    }
    ejs.renderFile('./templates/index.ejs',queries,{},(err,str)=>{
        if(err){
            console.log(err)
        }
    res.send(str)
    })

}

app.get('/', callback)

let callInsertar=(req, res) =>{
    ejs.renderFile('./templates/insertar.ejs',queries,{},(err,str)=>{
        if(err){
            console.log(err)
        }
    res.send(str)
    })

}

app.get('/Insertar', callInsertar)

app.post('/', (req, res) => {
    res.send('El lobo dice auu!')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})