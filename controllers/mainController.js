const router = require("express").Router()
const sushi = require("../model/sushi")

router.get("/", (req, res) =>{

    sushi.all(sushi =>{
        res.render("index", {sushi: sushi})

    })

})  

router.post("/api/sushi", (req, res) =>{
    const sushiName = req.body.name

    sushi.create(sushiName, data =>{
        res.end()
    })
})  

router.put("/api/sushi/:id", (req, res) =>{
    const sushiId = req.params.id
    
    sushi.update(sushiId, data =>{
        res.end()
    })
})  

module.exports = router;