import "../css/Moviecard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}){
	const {isFavorite, addToFavorites, remoceFromFavorites} = useMovieContext();

	const favorite = isFavorite(movie.id);

	function onLike(e){
		e.preventDefault();
		if (favorite)
			remoceFromFavorites(movie.id);
		else
			addToFavorites(movie);
	}

	return (
			<div className="movie-card">
				<div className="movie-poster">
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
					<div className="movie-overlay">
						<button className={`favorite-btn${favorite ? "active" : ""}`} onClick={onLike}>🤍
						</button>
					</div>
				</div>
			<div className="movie-info">
				<h3>{movie.title}</h3>
				<p>{movie.release_date}</p>
			</div>
		</div>
	)
}

export default MovieCard;
