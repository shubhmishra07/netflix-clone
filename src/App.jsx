import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import MovieRow from "./MovieRow/MovieRow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <MovieRow title="Trending Now" />
      <MovieRow title="Popular on Netflix" />
      <MovieRow title="Action Movies" />
      <MovieRow title="Comedy Movies" />
      <MovieRow title="Horror Movies" />


    </>
  );
}

export default App;