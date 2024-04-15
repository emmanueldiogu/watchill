import PropTypes from 'prop-types';
import { image_uri } from "../Request";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useEffect } from 'react';

function Carousel(props) {

    useEffect(() => {
        // This code runs after the component has rendered
        const slider = document.getElementById(`slider-${props.sectionID}`);
        if (slider) {
            // Access the slider element and perform any necessary actions
        }
    }, [props.sectionID, props.slideSize]); // Run this effect whenever sectionID changes
    const prev = () => {
        const slider = document.getElementById(`slider-${props.sectionID}`);
        if (!slider) return (slider);
        if (slider.offsetWidth < 625) {
            slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
        } else if (slider.offsetWidth < 753) {
            slider.scrollLeft = slider.scrollLeft - slider.offsetWidth / 2;
        } else {
            slider.scrollLeft = slider.scrollLeft - slider.offsetWidth / props.slideSize;
        }
    };

    const next = () => {

        const slider = document.getElementById(`slider-${props.sectionID}`);
        if (!slider) return (slider);
        if (slider.offsetWidth < 625) {
            slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
        } else if (slider.offsetWidth < 753) {
            slider.scrollLeft = slider.scrollLeft + slider.offsetWidth / 2;
        } else {
            slider.scrollLeft = slider.scrollLeft + slider.offsetWidth / props.slideSize;
        }
    };

    return (
        <div className='relative overflow-hidden group'>
            <div id={`slider-${props.sectionID}`} className="slider flex -ml-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {props.movieList.map((movie, index) => {
                    return (
                        <div key={index} className={`slide min-w-0 shrink-0 grow-0 basis-full pl-4 rounded-[10px] shadow-custom md:basis-1/2 ${(props.slideSize === 4) ? 'lg:basis-1/4' : 'lg:basis-1/3'}`}>
                            <img src={`${image_uri}/w500/${movie.backdrop_path}`} className='w-full' alt="" />
                        </div>
                    );
                })}
            </div>
            <button onClick={prev} className='bg-black/5 group-hover:bg-black/50 text-white z-10 absolute top-0 left-0 bottom-0'>
                <BiChevronLeft size={30} className='invisible group-hover:visible' />
            </button>
            <button onClick={next} className='bg-black/10 group-hover:bg-black/50 text-white z-10 absolute top-0 right-0 bottom-0'>
                <BiChevronRight size={30} className='invisible group-hover:visible' />
            </button>
        </div>
    );
}
Carousel.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string
    })).isRequired,
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number,
    sectionID: PropTypes.number.isRequired,
    slideSize: PropTypes.number
};

Carousel.defaultProps = {
    autoSlide: false,
    autoSlideInterval: 3000,
    slideSize: 4
};

export default Carousel;