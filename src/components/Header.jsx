import '../styles/components/Header.css';
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
                        <p id="hero-subtitle" className="subtitle">Disfruto crear sitios y Aplicaciones Web<img className='world-img' src={iconWorld}></img></p>  
                        <div className="btn-container">
                            <a href="https://www.linkedin.com/in/lucas-chero/" target="_blank">
                           <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="Linkedin Logo" />
                            </a>
                            <a href="mailto:cherolucas2@gmail.com" target='_blank'>
                           <img src="https://w7.pngwing.com/pngs/612/278/png-transparent-email-illustration-gmail-computer-icons-email-google-symbol-gmail-angle-rectangle-triangle-thumbnail.png" alt="Gmail Logo" />
                            </a>
                            <a href="https://github.com/LucasCheer" target='_blank'>
                           <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github Logo" />
                            </a>
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