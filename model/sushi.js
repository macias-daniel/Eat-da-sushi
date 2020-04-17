const orm = require("../config/orm")


 const sushi = {

    all: (callback) => { 
        orm.getAll("sushi", data =>{
            callback(data)
        })
    },

    update: (id, callback) =>{
        orm.updateRowTruth("sushi", "hasBeenEaten", id, data =>{
            callback(data)
        })
    },

    create:(name, callback) =>{  
        orm.createRow("sushi", "name", name, data =>{
            callback(data)
        })
    }  
 }

 module.exports = sushi