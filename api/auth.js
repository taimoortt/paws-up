const express = require(`express`)
const router = express.Router()
const conn = require(`./conn`)

router.get(`/`, (req, res) => {
    const sql = `SELECT * FROM pawtner`
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log("Result: " + JSON.stringify(result))
        res.status(200).json(result)
    })
})

module.exports = router