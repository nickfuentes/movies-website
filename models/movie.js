const uuid = require('uuid/v1');

class Movie {
    constructor(title, description, genre, posterURL) {
        this.title = title
        this.description = description
        this.genre = genre
        this.posterURL = posterURL
        this.uuid = uuid()
    }
}

module.exports = Movie