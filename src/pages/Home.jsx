import { useEffect, useState } from "react";
import Spotlight from "../components/Spotlight";

function Home() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&append_to_response=videos,images`)
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovies();
    }, [])

    const spotlightMovies = movieList.splice(0, 5);
    console.log(spotlightMovies);

    return (
        <main>
            <Spotlight spotlightMovies={spotlightMovies} />
        </main>
    );
}

export default Home;