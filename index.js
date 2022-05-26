const express = require('express')
const ejs=require('ejs')
const app = express()
const port = 3000

//express body json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


let callback=(req, res) =>{
    
    let queries={
      frase:'Hola',
      autor:'Yo'
    }
    ejs.renderFile('./templates/index.ejs',queries,{},(err,str)=>{
        if(err){
            console.log(err)
        }
    res.send(str)
    })

}

app.get('/',callback)

let callInsertar=(req, res) =>{
  
  
  ejs.renderFile('./templates/insertar.ejs',queries,{},(err,str)=>{
      if(err){
          console.log(err)
      }
  res.send(str)
  })
} 
app.get('/insertar',callInsertar)

let calllRecoger=(req,res)=>{
const{query,params,body}=req
  console.log('Query: ',query)
  console.log('Params: ',params)
  console.log('Body: ',body)
  res.send('Hello World!')
}
app.post('/', calllRecoger)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})