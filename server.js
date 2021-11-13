const express = require(`express`)
const cookieParser = require(`cookie-parser`)
const cors = require(`cors`)
const bodyParser = require(`body-parser`)
const app = express()

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cookieParser())
app.use(cors({ origin: [`http://localhost:3000`], credentials: true }))
// app.use(cors({credentials : true}))


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