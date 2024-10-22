import '../styles/Styles.css';
import foto from '../assets/images/profile-photo.jpg';
import iconWorld from '../assets/images/world.svg';
import arrowBottom from '../assets/images/arrow-bottom.svg';

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
                        <p id="hero-subtitle" className="subtitle">Disfruto crear sitios y apps webs<img className='world-img' src={iconWorld}></img></p>  
                        <div className="btn-container">
                            <a href="https://linkedin.com/in/lucas-chero" target="_blank">
                                <figcaption className="social-media">
                                    
                                </figcaption>
                            </a>
                            <a href="https://github.com/LucasCheer" target="_blank">
                                <figcaption className="social-media">
                                    
                                </figcaption>
                            </a>
                            <a href="https://github.com/LucasCheer" target="_blank">
                                <figcaption className="social-media">
                                </figcaption>
                            </a>
                        </div>
                    </div>
                    <figure className="photo-container">
                        <img src={foto} alt="Foto Perfil" width="190px" />
                    </figure>
                    <figure id="arrow-bottom">
                        <img src={arrowBottom} alt="Flecha abajo"/>
                        <figcaption className="subtitle">Desliza</figcaption>
                    </figure>
                </div>
            </header>
    )
}

export default Header