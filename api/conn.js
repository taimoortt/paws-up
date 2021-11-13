const mysql = require(`mysql`)

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pawsup"
})

conn.connect((err) => {
    if (err) throw err
    console.log("Connected!")
})

console.log(`conn module ran`)

module.exports = conn