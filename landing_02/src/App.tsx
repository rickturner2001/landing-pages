import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-gradient-to-br from-violet-100 to-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
