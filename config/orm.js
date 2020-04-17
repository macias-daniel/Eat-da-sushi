const connection = require("./connection")

const orm = {

    getAll: (table, callback) =>{
        connection.query("SELECT * FROM ??;",[table], (err, data)=>{
            callback(data)
        })
    },

    updateRowTruth: (table, whatColChanged, id, callback) =>{
        connection.query("UPDATE ?? SET ?? = TRUE WHERE id = ?",[table, whatColChanged, id], (err, data)=>{
            callback(data)
        })
    },

    createRow: (table, column, values, callback) =>{
        connection.query("INSERT INTO ?? (??) VALUES (?);",[table, column, values] , (err, data)=>{
            callback(data)
        })
    }
}

module.exports = orm