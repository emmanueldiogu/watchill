import { useEffect, useState } from "react";
import Spotlight from "../components/Spotlight";
import scrollUp from "../assets/img/icons/scroll-up.png";
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
            <Spotlight spotlightMovies={spotlightMovies} autoSlide={true} />
            <main id="features" className="mt-14">
                <div className='flex items-center justify-center mb-12 md:mb-16 pt-20'>
                    <a href='#spotlight' className='p-1 w-14 h-14 text-white flex items-center justify-center'>
                        <img src={scrollUp} alt="" />
                    </a>
                </div>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Best Chills for You</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Keep Watching</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Popular on Watchill</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Top Action Shows</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Subscription or Buy</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Upcoming</h2>
                    <Carousel sectionName={'best-chills'} movieList={spotlightMovies} autoSlide={false} />
                </section>
            </main>
        </>
    );
}

export default Home;