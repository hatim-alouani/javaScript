import "../css/Favorites.css";
import {useMovieContext} from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
	const {favorites} = useMovieContext();

	if (favorites){
		return (
			<div className="favorites">
				<h2>Your Favorites</h2>
				<div className="movies-grid">
					{favorites.map((movie) => (
						<MovieCard movie={movie} key={movie.id}/>)
					)}
				</div>
			</div>
		);
	}
	if (fab)
	return (
		<div className="favorites-empty">
			<h2>No favorite Movies yet</h2>
			<p>like them so you can find them here</p>
		</div>
	);
}

export default Favorites;
