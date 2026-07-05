import "./MovieCard.css";

function MovieCard({ image }) {
  return (
    <div className="movie-card">
      <img src={image} alt="movie" />
    </div>
  );
}

export default MovieCard;