import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Background from "./sections/Background";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Lead from "./sections/Lead";
import MeetTheCast from "./sections/MeetTheCast";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Lead/>
      <Marquee rotation={2} />
      <Background/>
      <Marquee rotation={-4} />
      <Tokenomics/>
      <Marquee rotation={-4} />
      <Roadmap/>
      <MeetTheCast/>
      <Marquee rotation={-4} />
      <Footer/>
    </main>
  );
}
