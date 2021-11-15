const express = require(`express`)
const conn = require(`./conn`)
const router = express.Router()

// Viewing all reported cases
router.post('/view_cases', (req,res) => {
    console.log('Viewing reported cases')
    const sql = 'SELECT * FROM cases'
    conn.query(sql, (err, result) =>{
        if (err) throw err
        console.log('All Cases: ', res)
    })
})

