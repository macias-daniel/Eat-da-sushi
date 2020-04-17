const router = require("express").Router()
const sushi = require("../model/sushi")


router.get("/", (req, res) =>{
    sushi.all(sushi =>{

        //the data sushi.all is recieving is an array of objects. Handle bars wants an object so put your array into an object give your array a key and pass that object to res.render in handle bar refer to that data through the arrays key that you passed through the object
        const templateData = { sushi: JSON.stringify(sushi)}

        res.render("index", templateData)

    })
})  

module.exports = router;