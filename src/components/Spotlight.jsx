import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import scrollDown from "../assets/img/icons/scroll-down.png";
import calenderIcon from "../assets/img/icons/calendar_month.png";
import alarmIcon from "../assets/img/icons/alarm.png";
import { genres } from "./../components/Data";
import { image_uri } from "../Request";


function Spotlight(props) {
    const [curr, setCurr] = useState(0);
    const [autoSlide, setAutoSlide] = useState(props.autoSlide);
    const prev = () =>
        setCurr((curr) =>
            curr === 0 ? props.spotlightMovies.length - 1 : curr - 1
        );
    const next = useCallback(() => {
        setCurr((curr) =>
            curr === props.spotlightMovies.length - 1 ? 0 : curr + 1
        );
    }, [props.spotlightMovies.length]);
    const dot = (index) => setCurr(index);

    // Function to find genre names by ids
    const getGenreNamesByIds = (ids, allGenres) => {
        return ids
            .map((id) => {
                const genre = allGenres.find((genre) => genre.id === id);
                return genre ? genre.name : null;
            })
            .filter(Boolean);
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, props.autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, props.autoSlideInterval, next]);
    return (
        <section id="spotlight">
            <div
                className="slider relative flex overflow-hidden group"
                onMouseOver={() => setAutoSlide(false)}
                onMouseOut={() => setAutoSlide(props.autoSlide)}
            >
                {props.spotlightMovies.map((movie, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                background: `#950440 url(${image_uri}/original/${movie.backdrop_path}) no-repeat center / cover `,
                                transform: `translateX(-${curr * 100}%)`,
                            }}
                            className="slide relative flex-full h-dvh overflow-y-auto transition-transform ease-out duration-500"
                        >
                            <div className="spotlight__overlay absolute top-0 right-0 bottom-0 left-0 w-full"></div>
                            <div className="container px-4 mx-auto h-dvh grid grid-cols-12 gap-5 content-end pb-28">
                                <div className="movie-details col-span-12 lg:col-span-7 z-10 text-white">
                                    <h3 className="text-clamp-h2 leading-100 font-bold md:mb-10">
                                        Available Now
                                    </h3>
                                    <h2 className="font-black text-clamp-h1 mb-10 leading-100 line-clamp-2">
                                        {movie.title}
                                    </h2>
                                    <div className=" md:w-3/4">
                                        <div className="flex items-center justify-start gap-10 text-sm font-medium mb-5">
                                            <h4>
                                                {getGenreNamesByIds(
                                                    movie.genre_ids,
                                                    genres.genres
                                                ).join(", ")}
                                            </h4>
                                            <div className="flex items-center justify-between">
                                                <div className="w-6">
                                                    <img src={calenderIcon} alt="" />
                                                </div>
                                                <h4 className="ml-2">
                                                    {movie.release_date
                                                        ? movie.release_date.slice(0, 4)
                                                        : "N/A"}
                                                </h4>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="w-6">
                                                    <img src={alarmIcon} alt="" />
                                                </div>
                                                <h4 className="ml-2">
                                                    {movie.duration ? `${movie.duration}m` : "N/A"}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className=" text-clamp-h4 font-semibold mb-5">
                                            IMDb Rating{" "}
                                            <span className="font-['Anton'] font-normal text-sm bg-main1 px-1 py-[3px] rounded-[3px] ml-2">
                                                {movie.vote_average
                                                    ? movie.vote_average.toFixed(2)
                                                    : "N/A"}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 w-1/4 mb-5">
                                            <a href="/be-a-chiller" className="p-3 flex flex-col gap-1 leading-none cursor-pointer text-clamp-h4 font-bold rounded-md bg-gradient-to-r from-main2 to-[#c7b512] hover:to-main1 text-black shadow-glow-2">
                                                <span>Rent</span>
                                                <span className=" font-semibold text-clamp-h3">
                                                    $8.99
                                                </span>
                                            </a>
                                            <a href="/be-a-chiller" className="p-3 flex flex-col gap-1 leading-none cursor-pointer text-clamp-h4 font-bold rounded-md bg-gradient-to-r from-main2 to-[#c7b512] hover:to-main1 text-black shadow-glow-2">
                                                <span>Buy</span>
                                                <span className=" font-semibold text-clamp-h3">
                                                    $18.99
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="flex text-sm">
                                                <h4 className="font-medium mr-5">Director</h4>
                                                <p className=" font-light">Denis Villeneuve</p>
                                            </div>
                                            <div className="flex text-sm mb-5">
                                                <h4 className="font-medium mr-5">Staring</h4>
                                                <p className=" font-light">
                                                    Timothée Chalamet, Zendaya, Rebecca Ferguson
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-light line-clamp-3">
                                            {movie.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4  hidden group-hover:block">
                    <button
                        onClick={prev}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <BiChevronLeft size={40} />
                    </button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4  hidden group-hover:block">
                    <button
                        onClick={next}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <BiChevronRight size={40} />
                    </button>
                </div>
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {props.spotlightMovies.map((_, i) => (
                            <div
                                onClick={() => dot(i)}
                                key={i}
                                className={`cursor-pointer transition-all w-4 h-4  rounded-full ${curr === i ? "shadow-glow bg-white" : "bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center motion-safe:animate-bounce">
                        <a
                            href="#features"
                            className="p-1 w-14 h-14 text-white flex items-center justify-center"
                        >
                            <img src={scrollDown} alt="/" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
Spotlight.propTypes = {
    spotlightMovies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            backdrop_path: PropTypes.string,
        })
    ).isRequired,
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number,
};

Spotlight.defaultProps = {
    autoSlide: false,
    autoSlideInterval: 3000,
};

export default Spotlight;
