import express from "express"

import parte1 from "./router/parte1.js"
import parte2 from "./router/parte2.js"
//server ou app


const app = express()

app.use(express.json())

app.use("/api/v1/parte1", parte1)

app.use("/api/v1/parte2", parte2)



// inicia o servidor express na porta 3000 e define uma função de retorno de uma chamada 
app.listen(3000, () => {
  // Exibe uma mensagem no console quando quando o servidor estiver ativo .
  console.log("Servidor escutando na porta 3000")
})