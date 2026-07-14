import express from "express"

const app = express()

app.use(express.json())

// Somar
app.post("/api/v1/somar" , (req,res) => {

 const {numero1 , numero2} = req.body

 const resultado = Number(numero1) + Number(numero2)


 res.status(200).send({ 
  messege : resultado
})

})

// subtrair
app.post("/api/v1/subtrair", (req, res) => {
  const { numero1, numero2 } = req.body;
  const resultado = Number(numero1) - Number(numero2)

  res.status(200).send({
    message: resultado
  });
});

// multiplicar
app.get("/api/v1/multiplicar", (req, res) => {
  const { numero1, numero2 } = req.query;
  const resultado = Number(numero1) * Number(numero2)

  res.status(200).send({
    message: resultado
  });
});

// dividir
app.get("/api/v1/divisao", (req, res) => {
  const { numero1, numero2 } = req.query;
  const resultado = Number(numero1) / Number(numero2)

  res.status(200).send({
    message: resultado
  });
})

// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor escutando na porta 3000")
})