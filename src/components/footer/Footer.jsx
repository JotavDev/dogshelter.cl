import "./footer.css"

function Footer(){
    return(
        <footer className="divFooter">
            <div className="footerContent">
                <a className="github" target="_blank" href="https://github.com/JotavDev">Desarrollado por Javier Aguirre</a>
                <a className="githubAnchor" target="_blank" href="https://github.com/JotavDev"><img className="githubLogo" src="https://i.imgur.com/GklssJF.png" alt=""/></a>
            </div>
        </footer>
    )
}

export default Footer;