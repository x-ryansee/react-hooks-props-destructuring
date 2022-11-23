import React from "react";
import MovieCard from "./MovieCard";
const MovieTitle = "Mad Max";

function App() {
  const title = MovieTitle;
    const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}

export default App;
