import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm";
//import axios from "axios"

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  // useEffect(() => {
  //   axios
  // })

  console.log(savedList)

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />

      {/* Links UpdatedMoveFrom */}
      <Route exact path="/update-movie/:id" render={props => (
      <UpdateMovieForm {...props} movies={savedList} updateMovies={setSavedList} /> )} />
      
    </>
  );
};

export default App;
