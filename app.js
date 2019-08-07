const express = require("express")
const app = express()
const path = require('path')
const mustacheExpress = require("mustache-express")

app.use(express.urlencoded({ extended: false }))
app.use(express.static("css"))

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set("view engine", "mustache")

app.listen(3000, () => {
    console.log("The server is Nick....")
})