import "./MovieRow.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ title }) {

  const movies = [
    "https://picsum.photos/300/170?1",
    "https://picsum.photos/300/170?2",
    "https://picsum.photos/300/170?3",
    "https://picsum.photos/300/170?4",
    "https://picsum.photos/300/170?5",
    "https://picsum.photos/300/170?6",
  ];

  return (
    <div className="row">

      <h2>{title}</h2>

      <div className="cards">

        {movies.map((movie, index) => (
          <MovieCard key={index} image={movie} />
        ))}

      </div>

    </div>
  );
}

export default MovieRow;