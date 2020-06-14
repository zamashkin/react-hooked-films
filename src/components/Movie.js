import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "http://placehold.jp/300x445.png"

const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A"
        ? DEFAULT_PLACEHOLDER_IMAGE
        : movie.Poster;
    return (
        <div className="movie">
            <div className='movie__title'>{movie.Title}</div>
            <div>
                <img width="200" alt={`The movie titled: ${movie.Title}`} src={poster} />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie;