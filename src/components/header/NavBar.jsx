import './navbar.css'

function NavBar(){
    return <header>
        <navbar>
            <div className="DivLogo">
                <img className="LogoHeader" src="https://i.imgur.com/YCVWa6Z.png" alt="Logo Pukem" />
            </div>
            <div className="DivMenu">
                <ul className="UlMenuHeader">
                    <li className='LiMenuHeader'><a href="#">Home</a></li>
                    <li className='LiMenuHeader'><a href="#">Tienda</a></li>
                    <li className='LiMenuHeader'><a href="#">Contacto</a></li>
                </ul>
            </div>
        </navbar>
    </header>
}

export default NavBar;