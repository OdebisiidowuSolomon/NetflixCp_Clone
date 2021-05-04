import React, { useState, useEffect } from "react";
import axios from "./axios";

import Youtube from "react-youtube";

import movieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // console.table(movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log("movies", movie.original_name);
      movieTrailer(movie?.original_name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
          setTrailerUrl("Error Trailer Not Found, Try Looking Up On Youtube");
        });
    }
  };

  return (
    <div className="row">
      {title}
      <div className="row__posters">
        {movies.map((movie, i) => (
          <img
            key={i}
            src={`${base_url}${
              isLargeRow !== true ? movie.backdrop_path : movie.poster_path
            }`}
            onClick={() => handleClick(movie)}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      {/* Containers => each films */}
    </div>
  );
}
