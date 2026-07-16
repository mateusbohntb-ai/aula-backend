import express from "express"


const router = express.Router()

// Somar
router.post("/somar" , (req,res) => {

 const {numero1 , numero2} = req.body

 const resultado = Number(numero1) + Number(numero2)


 res.status(200).send({ 
  messege : resultado
})

})

export default router 