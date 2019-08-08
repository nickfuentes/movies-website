const express = require("express")
const app = express()
const path = require('path')
const mustacheExpress = require("mustache-express")

const moviesRouter = require("./routes/movies")

app.use(express.urlencoded({ extended: false }))
app.use("/css", express.static(__dirname + '/css'))

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set("view engine", "mustache")

app.use("/movies", moviesRouter)

app.listen(3000, () => {
    console.log("The server is Nick....")
})