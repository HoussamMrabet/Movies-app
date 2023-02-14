import React from "react";

export default function MovieCard({movie}) {
  return (
    <a href={`https://autoembed.to/movie/imdb/${movie.imdbID}`} className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </a>
  );
}
