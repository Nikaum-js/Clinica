import { AboutMobile } from "./components/AboutMobile";
import { AboutUs } from "./components/AboutUs";
import { Connect } from "./components/Connect";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Connect />
      <AboutMobile />
      <Pricing />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
