import imgAbout from '../assets/images/img-about.svg';

function SectionAbout() {
    return (
        <section id="about-me-section" className="section">
            <figure className="photo-about-me">
            <img src={imgAbout} alt="Programador" />  
            </figure>
            <div className="container-about-me">
                <h2 className="about-me-title">Sobre mí<span className="point">.</span></h2>
                
                <p className="about-me-text">
                    ¡Hola! 😊 <br/>
                    Mi nombre es <span className="resaltar">Lucas Chero</span> y soy un apasionado <span className="resaltar">Desarrollador Full-Stack</span>. Actualmente, estoy cursando la carrera de Sistemas de información en la <span className="resaltar">Universidad de Buenos Aires</span>, donde he adquirido una sólida base de conocimientos en desarrollo de software y tecnologías de la información.
                </p>
                <br/>
                <p className="about-me-text">
                    Mi objetivo es escribir código que sea seguro, escalable y limpio. Me considero una persona analítica, que siempre busca mejorar y <span className="resaltar">aprender nuevas tecnologías</span>. Disfruto colaborando en equipo, soy responsable, organizado y siempre estoy dispuesto a asumir nuevos retos.
                </p>
                <br/>
                <p className="about-me-text">
                    Si te gustaría conocer más sobre mí o discutir posibles colaboraciones, no dudes en ponerte en contacto. <span className="resaltar">¡Será un placer conectar contigo!</span>
                </p>
            </div>
        </section>
    ) 
}

export default SectionAbout;