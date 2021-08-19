import { AboutMobile } from "./components/AboutMobile";
import { AboutUs } from "./components/AboutUs";
import { Connect } from "./components/Connect";
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
    </>
  );
}

export default App;
