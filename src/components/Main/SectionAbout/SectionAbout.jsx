import './SectionAbout.css';

function SectionAbout() {
    return (
        <section id="about-me-section" class="section">
            <figure class="photo-about-me">  
            </figure>
            <div class="container-about-me">
                <h2 class="about-me-title">Sobre mí<span class="point">.</span></h2>
                <p class="about-me-text">
                    ¡Hola! 😊 <br/>
                    Mi nombre es <span class="resaltar">Lucas Chero</span> y soy un apasionado <span class="resaltar">Desarrollador Full-Stack</span>. Actualmente, estoy cursando la carrera de Sistemas de información en la <span class="resaltar">Universidad de Buenos Aires</span>, donde he adquirido una sólida base de conocimientos en desarrollo de software y tecnologías de la información.
                </p>
                <br/>
                <p class="about-me-text">
                    Mi objetivo es escribir código que sea seguro, escalable y limpio. Me considero una persona analítica, que siempre busca mejorar y <span class="resaltar">aprender nuevas tecnologías</span>. Disfruto colaborando en equipo, soy responsable, organizado y siempre estoy dispuesto a asumir nuevos retos.
                </p>
                <br/>
                <p class="about-me-text">
                    Si te gustaría conocer más sobre mí o discutir posibles colaboraciones, no dudes en ponerte en contacto. <span class="resaltar">¡Será un placer conectar contigo!</span>
                </p>
            </div>
        </section>
    ) 
}

export default SectionAbout;