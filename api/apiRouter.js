const express = require(`express`)
const router = express.Router()
// const conn = require(`./conn`)

router.use(require(`./auth`))

module.exports = router