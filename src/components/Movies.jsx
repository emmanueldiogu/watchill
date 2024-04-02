import {useEffect, useState} from "react";

function Movies() {

    

    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&append_to_response=videos,images`)
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovies();
    }, [])

    console.table(movieList);
    
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