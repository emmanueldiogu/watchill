import { useEffect, useState } from "react";
import Spotlight from "../components/Spotlight";
import Carousel from "../components/Carousel";

function Home() {
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

    const spotlightMovies = movieList.splice(0, 5);

    return (
        <>
            <Spotlight spotlightMovies={spotlightMovies} autoSlide={false} />
            <main id="features" className=" mt-14">
                <section>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
            </main>
        </>
    );
}

export default Home;