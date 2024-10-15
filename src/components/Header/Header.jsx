import './Header.css' 
import foto from '../../assets/images/profile-photo.jpeg'

function Header() {
    return (
        <header id="header" class="header">
                <nav class="navbar glass-effect">
                    <button class="button-nav">Menu</button>
                    <div class="navbar-container">
                        <a href="#header"><h6 id="name-logo" class="titles">Lucas<span id="point-logo" class="point">.</span>dev</h6></a>
                        <menu class="items">
                            <li><a href="#about-me-section" class="nav-link">Sobre mí</a></li>
                            <li><a href="#projects-section" class="nav-link">Proyectos</a></li>
                            <li><a href="#contact-section" class="nav-link">Contacto</a></li>
                        </menu>
                    </div>
                </nav>
                <div class="hero">
                    <div class="hero-container">
                        <h1 id="msj-welcome">Hola, soy Lucas</h1>
                        <p id="web-developer">Desarrollador <span>Full Stack</span></p>
                        <p id="hero-subtitle" class="subtitle">Disfruto crear sitios y apps webs </p>  
                        <div class="btn-container">
                            <a href="https://linkedin.com/in/lucas-chero" target="_blank">
                                <figcaption class="social-media">
                                    
                                </figcaption>
                            </a>
                            <a href="https://github.com/LucasCheer" target="_blank">
                                <figcaption class="social-media">
                                    
                                </figcaption>
                            </a>
                            <a href="https://github.com/LucasCheer" target="_blank">
                                <figcaption class="social-media">
                                </figcaption>
                            </a>
                        </div>
                    </div>
                    <figure class="photo-container">
                        <img src={foto} alt="Foto Perfil" width="200px" />
                    </figure>
                    <figure id="arrow-bottom">
                        <figcaption class="subtitle">Desliza</figcaption>
                    </figure>
                </div>
            </header>
    )
}

export default Header