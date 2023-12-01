import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export const Details = () => {
  // Get the 'id' parameter from the URL using useParams hook
  const { id } = useParams();

  // State to store the details of the movie
  const [state, setState] = useState("");

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Construct the URL for the movie details API
    let url = `https://www.omdbapi.com/?apikey=617a7d51&i=${id}`;

    // Call the fetching function to make the API request
    fetching(url);
  }, []);

  // Function to fetch data from the API
  const fetching = (url) => {
    axios
      .get(url)
      .then((res) => {
        // Set the state with the retrieved data
        setState(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to add the movie to favorites
  const addToFavourite = () => {
    // Show an alert to indicate that the movie is added to favorites
    alert("Movie added");

    // Get the current favorites from localStorage or initialize an empty array
    const arr = JSON.parse(localStorage.getItem("favorite")) || [];

    // Create a new array with the current favorites and the details of the current movie
    const fav = [...arr, state];

    // Update the favorites in localStorage
    localStorage.setItem("favorite", JSON.stringify(fav));
  };

  return (
    <>
      {/* Box for displaying movie details */}
      <Box border={"1px solid"} mt={"40px"} w="90%" m="auto">
        <Box className="detail-Box">
          {/* Box for displaying movie poster */}
          <Box w={"100%"} bg={"white"}>
            <Image width={"100%"} h={"max-content"} m={"auto"} src={state.Poster} />
          </Box>

          {/* Box for displaying movie details */}
          <Box className="detail-Box2">
            {/* Heading for movie title */}
            <Heading mt={"2%"} size={"2xl"}>
              {state.Title}
            </Heading>

            {/* Mini details section */}
            <Box fontWeight={"500"} color={"gray"} className="mini-details" mt={"2%"}>
              <Button size={"sm"}>{state.Rated}</Button>
              <Text>{state.Genre}</Text>
              <Text>
                <i class="fa-solid fa-calendar-days"></i>&nbsp;{state.Year}
              </Text>
              <Text><i class="fa-solid fa-clock"></i>&nbsp;{state.Runtime}</Text>
              <Text>Rating: {state.imdbRating}</Text>
            </Box>

            {/* Movie plot section */}
            <Text fontWeight={"500"} color={"gray.600"} w={"70%"} mt={"2%"}>
              {state.Plot}
            </Text>

            {/* Additional movie details */}
            <Text fontWeight={"500"} w={"70%"} mt={"2%"}>
              Writers:-{state.Writer}
            </Text>
            <Text fontWeight={"500"} color={"gray.600"} w={"70%"} mt={"2%"}>
              Language:- {state.Language}
            </Text>
            <Text fontWeight={"500"} color={"gray.600"} w={"70%"} mt={"2%"}>
              Country:-{state.Country}
            </Text>
            <Text fontWeight={"500"} color={"gray.600"} w={"70%"} mt={"2%"}>
              Awards:-{state.Awards}
            </Text>

            {/* Button to add the movie to favorites */}
            <Box mt={"3%"} className="last-button">
              <Button colorScheme="green" onClick={addToFavourite}>FAVOURITE</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
