import React, { useState, useEffect } from "react";
import axios from "./axios";
import { data } from "./requests";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  const [val, setVal] = useState(true);

  async function fetchData() {
    const request = await axios.get(data[0].fetch);
    let rand = Math.floor(Math.random() * request.data.results.length - 2);
    setMovie(request.data.results[rand]);
    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function toggle() {
    setVal(!val);
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "0px -50px",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => alert("Working On It!")}
          >
            Play
          </button>
          <button className="banner__button" onClick={() => fetchData()}>
            My List
          </button>
        </div>
        <h1 onClick={toggle} className="banner__description">
          {val ? truncate(movie?.overview, 150) : movie?.overview}
        </h1>
      </div>
      <div className="banner--fadBottom" />
    </header>
  );
}

export default Banner;
