import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Link : 특정 url로 이동시켜주는 컴포넌트 <Link to="/asdw"></Link>
const Movie = ({ id, poster, title, summary, genres }) => {
  return (
    <div>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
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
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
