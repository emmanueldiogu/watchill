import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Carousel(props) {

    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? props.movieList.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === props.movieList.length - 1 ? 0 : curr + 1));
    const dot = (index) => setCurr(index);

    const slide = document.querySelector(`.${props.sectionName} .slide`);

    useEffect(() => {
        if (!props.autoSlide) return;
        const slideInterval = setInterval(next, props.autoSlideInterval)
        return () => clearInterval(slideInterval)
    }), [props.autoSlide, props.autoSlideInterval, next];
    return (
        <section className="carousel">
            <div className={`${props.sectionName} slider relative flex gap-5 h-[310px] overflow-hidden`}>
                {props.movieList.map((movie, index) => {
                    // const slide = document.querySelector(`.${props.sectionName} .slide`)
                    // const slideWidth = slide.clientWidth;
                    const slideWidth = 40;
                    // Calculate the total translation percentage
                    const totalTranslateX = curr * (slideWidth + 5); // Adjust the 5 if the gap is different
                    return (
                        <div key={index} style={{ transform: `translateX(-${totalTranslateX}%)` }} className="slide relative transition-transform ease-out duration-500 col-span-5 flex-[1_0_100%] md:flex-[1_0_41.67%]" >
                            <div className="">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className=' object-cover w-full' />
                            </div>
                        </div>
                    );
                })}
                <div className="h-full w-6 bg-black/20 absolute">
                    <button onClick={prev} className='rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronLeft size={40} />
                    </button>
                </div>
                <div className="h-full absolute">
                    <button onClick={next} className='rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiChevronRight size={40} />
                    </button>
                </div>
                <div className="absolute bottom-4 right-0 left-0 hidden">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {props.movieList.map((_, i) => (
                            <div
                                onClick={() => dot(i)}
                                key={i}
                                className={` cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2 shadow-glow" : "bg-opacity-50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
Carousel.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string
    })).isRequired,
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number,
    sectionName: PropTypes.string
};

Carousel.defaultProps = {
    autoSlide: false,
    autoSlideInterval: 3000
};

export default Carousel;