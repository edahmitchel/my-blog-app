import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SingleCard from "./components/SingleCard";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Trending />
      <SingleCard/>
    </div>
  );
}

export default App;
