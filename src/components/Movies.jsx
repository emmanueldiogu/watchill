import {useEffect, useState} from "react";

function Movies() {

    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`)
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(() => {
        getMovies();
    }, [])

    console.log(movieList);

    
    return (
        <div>
            {movieList.map((movie, index) => {
                return (
                    <img key={index}
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path
                }`} 
                    alt={`${movie.title}`} 
                    />
                );
            })}
        </div>
    );
}

export default Movies;