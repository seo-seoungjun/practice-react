import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ id, title, summary, year, genres, poster }) {
  return (
    <div className="movie-container">
      <img src={poster} alt={title}></img>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            summary,
            id,
          },
        }}
      >
        <div className="movie-data">
          <h3>{title}</h3>
          <h4>{year}</h4>
          <ul>
            {genres.map((gener, index) => (
              <li key={index} className="gener">
                {gener}
              </li>
            ))}
          </ul>
          {summary === "" ? <p>none</p> : <p>{summary}</p>}
        </div>
      </Link>
      ;
    </div>
  );
}

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
