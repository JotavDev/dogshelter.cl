import Header from "./components/header/Header";
import CarouselFadeExample from "./components/content/Carousel"
import Footer from "../src/components/footer/Footer"
import Aside, { PerrosDiv } from "../src/components/content/Aside"
import { BrowserRouter , Routes , Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <CarouselFadeExample/>
        <Routes>
          <Route path="/perritos" element={<PerrosDiv/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;