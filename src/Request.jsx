const key = import.meta.env.VITE_MOVIE_API_KEY;
const base_uri = "https://api.themoviedb.org/3/";
const image_uri = "https://image.tmdb.org/t/p/";

const requests = {
    discovery: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
    tvShows: `${base_uri}discover/tv?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
    popular: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
    top: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
    subBuy: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
    upcoming: `${base_uri}discover/movie?api_key=${key}&append_to_response=video,image`,
};

export { requests, base_uri, image_uri };