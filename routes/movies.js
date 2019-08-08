const express = require("express")
const router = express.Router()

const Movie = require("../models/movie")

let movies = [
    { title: "Spiderman Far From Home", description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.", genre: "Action", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357530", posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg" },
    { title: "Creed II", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357531", description: "Relive the American Revolution or experience it for the first time in Assassin's Creed III Remastered - with enhanced graphics and improved gameplay mechanics.", genre: "Action", posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Creed_II_poster.png/220px-Creed_II_poster.png" },
    { title: "John Wick 3", uuid: "eaa7be40-b9e2-11e9-bc75-0bfc00357535", description: "After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.", genre: "Action", posterURL: "https://cdn4.gsc.com.my/WebLITE/Applications/MovieManagement/uploaded/pics/2019/John_Wick_3_Parabellum/John_wick3_new_keyart_500.jpg" },
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

router.get("/:movieID", (req, res) => {

    let movieID = req.params.movieID
    // console.log(movieID)

    let movie = movies.filter(movie => {
        return movie.uuid == movieID
    })

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