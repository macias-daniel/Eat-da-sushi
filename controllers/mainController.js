const router = require("express").Router()
const sushi = require("../model/sushi")


router.get("/", (req, res) =>{
    sushi.all(data =>{
        console.log(data)
    })
})  

module.exports = router;