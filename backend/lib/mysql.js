const mysql = require('mysql')
const { config } = require('../config')

const host = config.dbHost
const database = config.dbName
const user = config.dbUser
const password = config.dbPassword

class MySqlLib{
    constructor(){
        this.con = mysql.createConnection({ host, database, user, password })
        this.con.connect(err => err ? console.log(err) : console.log("Connected"))
    }

    create({name, email, state, city}){
        return new Promise((resolve, reject) =>
            this.con.query(`INSERT  INTO contacts (name, email, state, city) VALUES (${name}, ${email}, ${state}, ${city})`, (err, res) => err ? reject(new Error()) : resolve(res))
        )
    }
        

    disconnect(){
        this.con.destroy()
    }
}

module.exports = MySqlLib