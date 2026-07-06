import express from "express"

//server ou app

const app = express()
//Configura uma rota ´para o método HTTP GET na raiz ("/") do aplicativo.
//path params - router 
app.get('/api/v1/somar', (req, res) => {
    // query params
  const numero1 =Number(req.query.batata)
  const numero2 =Number(req.query.numero2)

const resultado = numero1 + numero2 
res.send({ resultado })
})

//crod - create ,read , Update and delete 
app.get('/api/pessoa/:id', (req, res) => {

  const id = req.params.id

  res.send({ message: id })

})



// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor ouvindo na porta 3000")
})