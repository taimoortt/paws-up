const express = require(`express`)
const router = express.Router()
const { createToken, verifyToken } = require(`./auth`)
const conn = require(`./conn`)

// Sign in pawtner
router.post(`/signin/pawtner`, (req, res) => {
    console.log(`sign in pawtner`)
    const sql = `SELECT password FROM pawtner WHERE ID = ${req.body.username}`
    conn.query(sql, (err, result) => {
        if (err) throw err
        const password = result[0] && result[0].password
        if (password && password == req.body.password) {
            const token = createToken(req.username, `pawtner`)
            res.cookie('pawsup', token).status(200).json({})
        }
        else if (password) res.status(400).json({ error: `Password not correct.` })
        else res.status(400).json({ error: `Username does not exist.` })
    })
})

// Sign in staff
router.post(`/signin/staff`, (req, res) => {
    console.log(`sign in staff`)
    const sql = `SELECT password FROM staff WHERE ID = ${req.body.username}`
    conn.query(sql, (err, result) => {
        if (err) throw err
        const password = result[0] && result[0].password
        if (password && password == req.body.password) {
            const token = createToken(req.username, `staff`)
            console.log(token)
            res.cookie('pawsup', token).status(200).json({})
        }
        else if (password) res.status(400).json({ error: `Password not correct.` })
        else res.status(400).json({ error: `Username does not exist.` })
    })
})

// Sign in admin
router.post(`/signin/admin`, (req, res) => {
    const sql = `SELECT * FROM pawtner`
    conn.query(sql, (err, result) => {
        if (err) throw err
        console.log("Result: " + JSON.stringify(result))
        res.status(200).json(result)
    })
})

module.exports = router