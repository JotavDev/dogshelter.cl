import './navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return (
        <>
            <header>
                <Navbar className='navbarContainer' bg="warning" variant="dark">
                    <Container className='contenedorLogo'>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://i.imgur.com/YCVWa6Z.png"
                                width="140"
                                height="45"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                    </Container>
                    <Container className='contenedorCategorias'>
                        <ul className='ulNav'>
                            <li className='liNav'><a className='anchorNav' href="/home">Home</a></li>
                            <li className='liNav'><a className='anchorNav' href="/perritos">Perritos</a></li>
                        </ul>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default NavBar;