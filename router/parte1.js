import express from "express"


const router = express.Router()


//exercicio 1
router.get("/exer1", (req, res) => {

  const { numero1, numero2 } = req.query;
  const resultado = Number(numero1) + Number(numero2)

  res.status(200).send({
    message: resultado
  });
});



//exercicio 2 
router.get("/exer2", (req, res) => {

  const { numero1, numero2 } = req.query;

  const resultado = Number(numero1) * Number(numero2)

  res.status(200).send({
    message: resultado
  });
});

router.get("/exer3", (req, res) => {

  const { peso1, peso2, peso3, peso4, peso5 } = req.query;
  const resultado = (Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5) / 5)

  res.status(200).send({

    message: resultado

  });
});

router.get("/exer4", (req, res) => {

  const { graus } = req.query;
  const fr = (Number(9 * graus + 160) / 5)

  res.status(200).send({

    message: fr

  });

});

export default router