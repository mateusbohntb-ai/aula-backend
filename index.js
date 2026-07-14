import express from "express"

//server ou app


const app = express()

app.use(express.json())

app.post("/api/v1/exer1", (req, res) => {

  const { numero1, numero2 } = req.body;

  const resultado = Number(numero1) + Number(numero2)

  res.status(200).send({
    message: resultado
  });
});




app.post("/api/v1/exer2", (req, res) => {

  const { numero1, numero2 } = req.body;

  const resultado = Number(numero1) * Number(numero2)

  res.status(200).send({
    message: resultado
  });
});





// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000, () => {
  // Exibe uma mensagem no console quando quando o servidor estiver ativo .
  console.log("Servidor escutando na porta 3000")
})