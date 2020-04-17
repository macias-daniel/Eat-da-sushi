const orm = require("../config/orm")


 const sushi = {

    all: (callback) => { 
        orm.getAll("sushi", data =>{
            callback(data)
        })
    }

 }

 module.exports = sushi