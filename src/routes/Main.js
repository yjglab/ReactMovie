import { useEffect, useState } from "react";
import styles from "../App.module.css";
import Movie from "../components/Movie";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <header className={styles.test}>Loading</header>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Main;
