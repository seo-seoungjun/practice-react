import React from "react";
import axios from "axios";
import Movies from "../components/movies";
import "./app.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovie = async () => {
    const movie = await axios.get("https://yts.mx/api/v2/list_movies.json");
    const {
      data: {
        data: { movies },
      },
    } = movie;
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="movies">
        {isLoading ? (
          <div className="loader-container">
            <span className="loader">Loading...</span>
          </div>
        ) : (
          movies.map((movies) => (
            <Movies
              key={movies.id}
              title={movies.title}
              summary={movies.summary}
              year={movies.year}
              poster={movies.medium_cover_image}
              genres={movies.genres}
            />
          ))
        )}
      </section>
    );
  }
}

export default Home;
