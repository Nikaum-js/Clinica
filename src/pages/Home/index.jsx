import { Navbar } from '../../components/Navbar'
import { Presentation } from '../../components/Presentation'
import { Connect } from '../../components/Connect'
import { Pricing } from '../../components/Pricing'
import { AboutUs } from '../../components/AboutUs'
import { Footer } from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Connect />
      <Pricing />
      <AboutUs />
      <Footer />
    </>
  );
}
