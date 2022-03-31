import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// useParams : url에 있는 값을 반환. (변경되는 값)

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <header>{movie.title} - Detail</header>
          <img src={movie.large_cover_image} alt={movie.id} />
          <ul>
            <li>{movie.rating}</li>
            <li>
              {movie.genres?.map((g) => (
                <span key={g}>{g} </span>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Detail;
