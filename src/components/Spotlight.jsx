import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Spotlight(props) {

    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? props.spotlightMovies.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === props.spotlightMovies.length - 1 ? 0 : curr + 1));

    return (
        <section className="spotlight">
            <div className='slider relative flex overflow-hidden'>
                {props.spotlightMovies.map((movie, index) => {
                    return (
                        <div key={index} style={{ background: `#950440 url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center / cover `, transform: `translateX(-${curr * 100}%)` }} className="slide flex-full h-dvh transition-transform ease-out duration-500">
                            <div className="spotlight__overlap"></div>
                            <div className="spotlight-content">
                                <h2>{movie.title}</h2>
                            </div>
                        </div>
                    );
                })}
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronLeft size={40} />
                    </button>
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronRight size={40} />
                    </button>
                </div>
            </div>
        </section>
    );
}
Spotlight.propTypes = {
    spotlightMovies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string
    })).isRequired
};

export default Spotlight;