import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if brackets aka [] is blank run code once and dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // This async variable is creating a request to grab axios url and combine it with the Row props inside app.js... which is NETFLIX ORIGINALS & TRENDING NOW: ↓
      //'https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213'
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="row__posters">
        {/* row__posters  */}
        {movies.map((movie) => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  );
}

export default Row;
