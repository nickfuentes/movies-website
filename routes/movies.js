const express = require("express")
const router = express.Router()

const Movie = require("../models/movie")

let movies = [
    { title: "Spiderman Far From Home", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357530", posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg" },
    { title: "Creed II", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357531", posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Creed_II_poster.png/220px-Creed_II_poster.png" },
    { title: "John Wick 3", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357535", posterURL: "https://cdn4.gsc.com.my/WebLITE/Applications/MovieManagement/uploaded/pics/2019/John_Wick_3_Parabellum/John_wick3_new_keyart_500.jpg" },
]

// Shows all the movie from the array
router.get("/", (req, res) => {
    res.render("movies", { movies: movies })
})

// Shows the form page to create a movie
router.get("/form", (req, res) => {
    res.render("form")
})

// POST the new movie to the array
router.post("/create", (req, res) => {

    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let posterURL = req.body.posterURL

    let movie = new Movie(title, description, genre, posterURL)

    movies.push(movie)

    res.redirect("/movies")
})

router.get("/:movieId", (req, res) => {
    let movieID = req.params.movieID

    let movie = [{ title: "Batman", genre: "Action" }]
    console.log(movieID)
    res.render("movie-details", { movie: movie })
})

// Deletes the movie by the movie title
router.post("/delete", (req, res) => {
    let movieID = req.body.movieID

    function removeMovie(movies, movieID) {

        return movies.filter(function (movie) {
            return movie.uuid != movieID;
        });

    }

    movies = removeMovie(movies, movieID);

    res.redirect("/movies")
})

module.exports = router