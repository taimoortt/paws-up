const express = require(`express`)
const router = express.Router()
const { createToken, verifyToken } = require(`./api/auth`)

const ensureAuth = (userType) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies.token
            console.log(`token received`, token)
            const decodedToken = await verifyToken(token)
            console.log(`decoded token received`, decodedToken)
            if (userType === decodedToken.userType) {
                next()
            } else {
                console.log(`${userType} could not be authenticated.`)
                if (userType === `admin`) {
                    res.redirect('/signinadmin');
                } else {
                    res.redirect('/signin');
                }
            }
        } catch (err) {
            console.log(`${err} while authenticating ${userType}`)
            if (userType === `qs-admin`) {
                res.redirect('/signinadmin');
            } else {
                res.redirect('/signin');
            }
        }
    }
}

// General routes everyone has access to
router.use(`/`, express.static(`frontend/build`))
router.use(`/signin`, express.static(`frontend/build`))
router.use(`/signup`, express.static(`frontend/build`))
router.use(`/signinadmin`, express.static(`frontend/build`))

// Routes requiring authentication
router.use(`/pawtnerhomepage/:username`, ensureAuth(`pawtner`), express.static(`frontend/build`))
router.use(`/staffhomepage/:username`, ensureAuth(`staff`), express.static(`frontend/build`))
router.use(`/adminhomepage/:username`, ensureAuth(`admin`), express.static(`frontend/build`))


module.exports = router