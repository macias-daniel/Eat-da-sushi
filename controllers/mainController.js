const router = require("express").Router()
const sushi = require("../model/sushi")

router.get("/", (req, res) =>{
    sushi.all(sushi =>{

        //the data sushi.all is recieving is an array of objects. Handle bars wants an object so put your array into an object give your array a key and pass that object to res.render in handle bar refer to that data through the arrays key that you passed through the object
        const templateData = { sushi: JSON.stringify( sushi, null, 2 ) }
        res.render("index", templateData)

    })
})  


router.post("/api/sushi", (req, res) =>{
    const sushiName = req.body.sushiName
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