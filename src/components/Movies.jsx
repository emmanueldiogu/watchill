import PropTypes from 'prop-types';
// import { useEffect, useState } from "react";

function Movies(props) {



    return (
        <>
            <div className="overflow-hidden">
                <div
                    className="flex -ml-4"
                    style="transform: translate3d(-0.000838067px, 0px, 0px)"
                >
                    <div
                        role="group"
                        aria-roledescription="slide"
                        className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Movies.propTypes = {
    index: PropTypes.number.isRequired,
    movie: PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string,
        overview: PropTypes.string,

    }).isRequired
};

export default Movies;