import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

// Movie component
export const Movie = ({ movie }) => {
    return (
        // Link to the details page for the specific movie using its imdbID
        <Link to={`/details/${movie.imdbID}`}>
            {/* Container for the movie card */}
            <div className='movieCard'>
                {/* Movie poster */}
                <img src={movie.Poster} alt={movie.Title} />
                {/* Movie title */}
                <p>{movie.Title}</p>
                
                {/* Movie type */}{/* Movie year */}
                <h5> Type-{movie.Type} Year-{movie.Year}</h5>
            </div>
        </Link>
    );
};
