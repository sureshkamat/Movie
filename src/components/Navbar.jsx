import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component
export const Navbar = () => {
  return (
    // Flex container for navigation links
    <Flex className="nav">
      {/* Link to the Home page */}
      <Link to='/'>
        <Button>Home</Button>
      </Link>

      {/* Link to the Favorites page */}
      <Link to='/favorite'>
        <Button>Favorites</Button>
      </Link>

      {/* Link to the Login/Signup page */}
      <Link to='/login'>
        <Button>Login/Signup</Button>
      </Link>
    </Flex>
  );
};
