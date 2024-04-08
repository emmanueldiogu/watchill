import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiSolidChevronsDown } from 'react-icons/bi';

function Spotlight(props) {

    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? props.spotlightMovies.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === props.spotlightMovies.length - 1 ? 0 : curr + 1));
    const dot = (index) => setCurr(index);

    useEffect(() => {
        if (!props.autoSlide) return;
        const slideInterval = setInterval(next, props.autoSlideInterval)
        return () => clearInterval(slideInterval)
    });
    return (
        <section className="spotlight">
            <div className='slider relative flex overflow-hidden'>
                {props.spotlightMovies.map((movie, index) => {
                    return (
                        <div key={index} style={{ background: `#950440 url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center / cover `, transform: `translateX(-${curr * 100}%)` }} className="slide flex-full h-dvh transition-transform ease-out duration-500">
                            <div className="spotlight-content">
                                <h2>{movie.title}</h2>
                            </div>
                        </div>
                    );
                })}
                <div className='absolute z-[1] inset-0 flex items-center justify-between p-4'>
                    <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronLeft size={40} />
                    </button>
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronRight size={40} />
                    </button>
                </div>
                <div className="absolute z-[1] bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {props.spotlightMovies.map((_, i) => (
                            <div
                                onClick={() => dot(i)}
                                key={i}
                                className={` cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2 shadow-glow" : "bg-opacity-50"}`}
                            />
                        ))}
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href='#main' className='p-1 w-14 h-14 text-white flex items-center justify-center'>
                            <BiSolidChevronsDown size={56} className='shadow-glow' />
                        </a>
                    </div>
                </div>
                <div className="spotlight__overlay absolute top-0 right-0 bottom-0 left-0 w-full"></div>
            </div>
        </section>
    );
}
Spotlight.propTypes = {
    spotlightMovies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string
    })).isRequired,
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number
};

Spotlight.defaultProps = {
    autoSlide: false,
    autoSlideInterval: 3000
};

export default Spotlight;