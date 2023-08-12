import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import WeeksDeals from "./components/weeks-deals/WeeksDeals";
import Footer from "./components/Footer/Footer";
import BrandLessons from "./components/brand-lessons-container/BrandLessons";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WeeksDeals />
      <BrandLessons></BrandLessons>
      <Footer />
    </>
  );
}

export default App;
