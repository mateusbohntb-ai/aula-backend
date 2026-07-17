import express from "express"

const router = express.Router()
//localhost:3000/api/v1/parte2/exer5
router.post("/exer5", (req, res) => {


    const { milhas } = req.body;
    const km = (Number(milhas * 1.60934))

    res.status(200).send({
        message: km

    })
})

router.post("/exer6", (req, res) => {


    const segundos  = Number(req.body.segundos);
    const minutos = segundos / 60
    const horas = segundos / 3600
   
    res.status(200).send({



        message: {
            horas,
            minutos,
            segundos
        }
    })
  
})

router.post("/exer7", (req, res) => {


    const Km  = Number(req.body.Km);
    const m = Km * 1000
    const cm = Km * 100000
   
    res.status(200).send({
        message: {
            Km,
            m,
            cm
        }
    })
  
})


router.post("/exer8", (req, res) => {

    const numero = Number(req.body.numero);
    const tabuada = []; // declarada fora do loop

    for (let i = 1; i <= 10; i++) {
        tabuada.push(numero + " x " + i + " = " + (numero * i));
    }

    res.status(200).send({
        message: {
            tabuada
        }
    })
})



export default router