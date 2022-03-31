import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ poster, title, summary, genres }) => {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <img alt={title} src={poster} />
      <h4>{summary}</h4>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};
Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
