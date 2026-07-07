import express from "express"
import bancoDeDados from "./repository/index.js"


//server ou app

const app = express()
//Configura uma rota ´para o método HTTP GET na raiz ("/") do aplicativo.
//path params - router 
//app.get('/api/v1/somar', (req, res) => {
    // query params
 // const numero1 =Number(req.query.batata)
  ///const numero2 =Number(req.query.numero2)

//const resultado = numero1 + numero2 
//res.send({ resultado })
//})


app.get('/api/v1/pessoa/:id', (req, res) => {

  const id = req.params.id

 const pessoa = bancoDeDados.find(it => it.id == id)

 if (!pessoa) {

  res.send({ message: "pessoa nao encontrada  "})

  return
 }
  res.send({ pessoa})

 
})




app.get('/api/v1/deletar/:id', (req, res) => {

  const id = req.params.id

 const pessoa = bancoDeDados.find(it => it.id == id)

 if (!pessoa) {

  res.send({ message: "pessoa nao encontrada  "})

  return
 }
  res.send({ pessoa}) = 0

 
})


app.get('/api/v1/editar/:id/:alterar', (req, res) => {

  const id = req.params.id

    const alterar = req.params.alterar
 const pessoa = bancoDeDados.find(it => it.id == id)

 if (!pessoa) {

  res.send({ message: "pessoa nao encontrada  "})

  return
 }
  res.send({ name}) = alterar

 
})





//crod - create ,read , Update and delete 
app.get('/api/pessoa', (req, res) => {

//const name = req.query.name
//const id = req.query.id

const {id ,name } = req.query

bancoDeDados.push({id , name})

console.log(bancoDeDados)

if(!id ||!name ){

  res.send({ message: "Favor informar id e o name  "})
return
}


res.send({ message: "Pessoa criada com sucesso "})

})



// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor escutando na porta 3000")
})