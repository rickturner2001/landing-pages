import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-primary w-full md:px-32">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
