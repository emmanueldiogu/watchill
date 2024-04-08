import { useEffect, useState } from "react";

function Movies() {

    const [movieList, setMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);
    const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&append_to_response=video,image`;
    const tvURL = `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;

    const getMovies = () => {
        fetch(movieURL)
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }

    const getTV = () => {
        fetch(tvURL)
            .then(res => res.json())
            .then(json => setTvList(json.results))
    }
    useEffect(() => {
        getMovies();
        getTV();
    }, [])

    console.log(movieList);
    console.table(tvList);

    return (
        <div>
            {movieList.map((movie, index) => {
                return (
                    <div key={index}>
                        <img loading="lazy" src={`https://image.tmdb.org/t/p/original/${movie.poster_path
                            }`}
                            alt={`${movie.title}`}
                        />
                        <h2>{movie.title}</h2>
                    </div>
                );
            })}
        </div>
    );
}

export default Movies;