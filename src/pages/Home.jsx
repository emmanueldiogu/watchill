import { useCallback, useEffect, useState } from "react";
import Spotlight from "../components/Spotlight";
import scrollUp from "../assets/img/icons/scroll-up.png";
import Carousel from "../components/Carousel";
import { requests } from "../Request";

function Home() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = useCallback(() => {
        fetch(requests.discovery)
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);


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
                    <Carousel sectionID={1} movieList={spotlightMovies} autoSlide={false} className=" h-[100px]" />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Keep Watching</h2>
                    <Carousel sectionID={2} movieList={spotlightMovies} autoSlide={false} slideSize={3} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Popular on Watchill</h2>
                    <Carousel sectionID={3} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Top Action Shows</h2>
                    <Carousel sectionID={4} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Subscription or Buy</h2>
                    <Carousel sectionID={5} movieList={spotlightMovies} autoSlide={false} />
                </section>
                <section className="container p-4 mx-auto mb-12">
                    <h2 className=" text-clamp-h2 font-semibold mb-8 text-white">Upcoming</h2>
                    <Carousel sectionID={6} movieList={spotlightMovies} autoSlide={false} slideSize={3} />
                </section>
            </main>
        </>
    );
}

export default Home;