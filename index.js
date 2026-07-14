import express from "express"

//server ou app

const app = express()


app.post("/api/v1/somar", (req, res) => {
  const { numero1, numero2 } = req.body;
  const resultado = Number(numero1) + Number(numero2)
  const fala = "Digite um numero "
  res.status(200).send({
    message : fala ,
    message: resultado
  });
});



// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor escutando na porta 3000")
})