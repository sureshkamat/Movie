AllRoutes.js
Purpose:
This file defines the routing logic for the application using the Routes and Route components from react-router-dom.

Components:
Home: Renders the main page of the application displaying featured movies.
Favorite: Displays a list of favorite movies saved by the user.
Details: Displays detailed information about a specific movie based on its id.
Login: Provides a user authentication system, allowing users to register and log in.
Routing:
Home Route:

Path: '/'
Component: <Home />
Description: Renders the main page with featured movies.
Favorite Route:

Path: '/favorite'
Component: <Favorite />
Description: Displays the user's favorite movies.
Details Route:

Path: '/details/:id'
Component: <Details />
Description: Displays detailed information about a specific movie identified by id.
Login Route:

Path: '/login'
Component: <Login />
Description: Provides user registration and login functionality.
Catch-All Route:

Path: '*'
Redirects to: '/'
Description: Redirects to the home page if the provided route does not match any defined routes.
Home.js
Purpose:
This component represents the main page of the application, featuring a list of movies, search functionality, and sorting options.

State:
data: Stores the movie data fetched from the OMDB API.
search: Stores the search query for movie titles.
page: Keeps track of the current page for pagination.
filter: Stores the selected genre filter.
yearfilter: Stores the selected year filter.
yearsorting: Stores the selected sorting option based on the movie release year.
Dependencies:
External Libraries:
axios: Used for making HTTP requests to the OMDB API.
react-router-dom: Used for client-side routing.
Functionality:
Fetches movie data based on search, page, genre, and year filters.
Allows users to search for movies, apply genre and year filters, and sort results by release year.
Paginates the movie results.
Displays movies in a responsive grid layout.
Login.js
Purpose:
This component provides user registration and login functionality.

State:
username: Stores the entered username.
password: Stores the entered password.
isRegistered: Tracks whether the user is in the login or signup mode.
loginError: Stores any error messages during login or registration.
Dependencies:
External Libraries:
chakra-ui/react: Used for UI components like buttons and headings.
react-router: Used for client-side routing.
Functionality:
Allows users to register with a unique username and password.
Validates and logs in users based on their entered credentials.
Switches between login and signup modes.
Navbar.js
Purpose:
This component provides navigation links for the main pages of the application.

Dependencies:
External Libraries:
chakra-ui/react: Used for UI components like buttons and flex containers.
react-router-dom: Used for client-side routing.
Functionality:
Provides navigation links to the home page, favorites, and login/signup page.
Movie.js
Purpose:
This component represents a movie card displayed in the application.

Dependencies:
External Libraries:
react-router-dom: Used for client-side routing.
Functionality:
Displays information about a movie, including its title, release year, type, and poster.
Links to the detailed page for the specific movie.
Pagination.js
Purpose:
This component provides pagination functionality for navigating through the list of movies.

Dependencies:
External Libraries:
chakra-ui/react: Used for UI components like buttons.
Functionality:
Allows users to navigate to the previous and next pages.
Details.js
Purpose:
This component displays detailed information about a specific movie.

State:
state: Stores the detailed information of the selected movie.
Dependencies:
External Libraries:
chakra-ui/react: Used for UI components like buttons, box, and image.
axios: Used for making HTTP requests to the OMDB API.
react-router-dom: Used for client-side routing.
Functionality:
Fetches and displays detailed information about a specific movie.
Allows users to add the movie to their favorites.
Movie.css, Login.css, Details.css
Purpose:
These files contain styling information for their respective components.