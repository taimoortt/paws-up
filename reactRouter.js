const express = require(`express`)
const router = express.Router()

// General routes everyone has access to
router.use(`/`, express.static(`frontend/build`))
router.use(`/signin`, express.static(`frontend/build`))
router.use(`/signup`, express.static(`frontend/build`))
router.use(`/signupadmin`, express.static(`frontend/build`))

module.exports = router