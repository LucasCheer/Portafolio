import '../styles/Styles.css';
import foto from '../assets/images/profile-photo.jpg';
import iconWorld from '../assets/images/world.svg';
import ButtonCv from './ButtonCv';
import arrowBottom from '../assets/images/arrow-bottom.svg';
import linkIcon from '../assets/images/github-icon2.svg';
import linkLinkedin from '../assets/images/linkedin-icon.svg';  

function Header() {
    return (
        <header id="header" className="header">
                <nav className="navbar glass-effect">
                    <button className="button-nav">Menu</button>
                    <div className="navbar-container">
                        <a href="#header"><h6 id="name-logo" className="titles">Lucas<span id="point-logo" className="point">.</span>dev</h6></a>
                        <menu className="items">
                            <li><a href="#about-me-section" className="nav-link">Sobre mí</a></li>
                            <li><a href="#projects-section" className="nav-link">Proyectos</a></li>
                            <li><a href="#contact-section" className="nav-link">Contacto</a></li>
                        </menu>
                    </div>
                </nav>
                <div className="hero">
                    <div className="hero-container">
                        <h1 id="msj-welcome">Hola, soy Lucas Chero</h1>
                        <p id="web-developer">Desarrollador <span> de Software</span></p>
                        <p id="hero-subtitle" className="subtitle">Disfruto crear sitios y Aplicaciones Web<img className='world-img' src={iconWorld}></img></p>  
                        <div className="btn-container">
                            <ButtonCv />
                        </div>

                    </div>
                    <figure className="photo-container">
                        <img src={foto} alt="Foto Perfil" width="190px" />
                    </figure>
                    <figure id="arrow-bottom">
                        <a href="#about-me-section" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <img src={arrowBottom} alt="Flecha abajo"/>
                        <figcaption className="subtitle">Desliza</figcaption>
                        </a>

                    </figure>
                </div>
            </header>
    )
}

export default Header