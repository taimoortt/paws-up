const express = require(`express`)
const app = express()
const path = require(`path`)

// react or frontend routes
app.use(require(`./reactRouter`))

// api routes
app.use(`/api`, require(`./api/apiRouter`))

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
    console.log(process.env.NODE_ENV)
})