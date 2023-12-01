import React, { useEffect, useState } from 'react';
import { Movie } from '../components/Movie';
import { Button,Center } from '@chakra-ui/react';
export const Favorite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get data from localStorage
    const storedData = localStorage.getItem('favorite');

    if (storedData) {
      // Convert the string back to an array
      const parsedData = JSON.parse(storedData);

      // Do something with the retrieved data
      console.log('Retrieved data from localStorage:');
      setData(parsedData);
    }
  }, []);

  const handleDelete = (movieId) => {
    // Remove the movie with the specified ID from favorites
    const updatedData = data.filter((movie) => movie.imdbID !== movieId);
  
    // Update state and localStorage with the modified favorites
    setData([...updatedData]); // Create a new array reference
    localStorage.setItem('favorite', JSON.stringify(updatedData));
  };
  
  return (
    <div>
      <h2 className='homeHeading'>Favorite Movies</h2>
      <div className='container' id='container'>
        {data &&
          data.map((movie) => (
            <div key={movie.imdbID}>
              <Movie movie={movie} />
              <Center><Button colorScheme='red' onClick={() => handleDelete(movie.imdbID)}>Delete {movie.imdbID}</Button></Center>
            </div>
          ))}
      </div>
    </div>
  );
};
