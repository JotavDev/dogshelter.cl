import Header from "./components/header/Header";
import ItemListContainer from "../src/components/content/ItemListContainer"
import swal from 'sweetalert'
import CarouselFadeExample from "./components/content/Carousel"
import Footer from "../src/components/footer/Footer"
import Aside, { PerrosDiv } from "../src/components/content/Aside"

function App() {
  return (
    <>
      <Header/>
      <CarouselFadeExample/>
      <PerrosDiv/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;