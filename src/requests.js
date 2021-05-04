const API_KEY = "c6e38f0a967df896cdec8b25d5e25986";

export const data = [
  {
    title: "NETFLIX ORIGINALS",
    isLargeRow: true,
    fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    title: "Trending Now",
    fetch: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  },
  {
    title: "Top Rated",
    fetch: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  },
  {
    title: "Action Movies",
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
