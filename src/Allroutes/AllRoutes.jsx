
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Details } from '../Pages/Details';
import { Favorite } from '../Pages/Favorite';
import { Home } from '../Pages/Home';
import Login from '../Pages/Login'; 

export const AllRoutes = () => {
  return (
    // Wrapper for all routes
    <Routes>
      {/* Route for the Home component */}
      <Route path='/' element={<Home />} />

      {/* Route for the Favorite component */}
      <Route path='/favorite' element={<Favorite />} />

      {/* Route for the Details component with a dynamic parameter (id) */}
      <Route path='/details/:id' element={<Details />} />

      {/* Route for the Login component */}
      <Route path='/login' element={<Login />} />

      {/* Catch-all route to redirect to the home page if the provided route does not match any */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
