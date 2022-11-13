import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/WHO1Vjm.jpg"
          alt="Perrito salchicha mirando al vacío en manos de una persona"
        />
        <Carousel.Caption>
          <h3>Porque ellos también merecen una segunda oportunidad</h3>
          <p>es que trabajamos sin descanso.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/s8nFb7f.png"
          alt="Perrito sonriendo"
        />

        <Carousel.Caption>
          <h3>Nuestros perritos son cuidados y rehabilitados</h3>
          <p>para que estén en plena forma y saludables al momento de encontrar una familia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/VRnnqo3.jpg"
          alt="Perrito Yorkie con su familia humana"
        />

        <Carousel.Caption>
          <h3>Contamos con un programa de seguimiento</h3>
          <p>con el que podremos ayudarte a ti y a tu perruno a llevar una mejor transición de refugio a hogar.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;