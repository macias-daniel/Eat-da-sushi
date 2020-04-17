const connection = require("./connection")

const orm = {

    getAll: (table, callback) =>{
        connection.query("SELECT * FROM ??;",[table], (err, data)=>{
            callback(data)
        })
    }
}


module.exports = orm