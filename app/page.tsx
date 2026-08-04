import About from "../components/About";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Location />
      <Booking />
      <Footer />
    </main>
  );
}
