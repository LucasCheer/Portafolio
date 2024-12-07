import '../styles/sections/SectionContact.css';

function SectionContact() {
    return (
        <section id="contact-section" className="section">
            <div id="contact-header">
                <h3 id="title-contact" className="titles">Contacto<span className="point">.</span></h3>
                <h4 id="contact-subtitle" className="subtitle">Agendamos una reunión? ☕</h4>     
            </div>
            <form className="form" action="" method="GET">
                <label htmlFor="name">Ingresa tu nombre</label>
                <input type="text" id="name" name="name" placeholder="Nombre y Apellido" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="ejemplo@mail.com" />
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" placeholder="Escribe aquí tu consulta o mensaje..."></textarea>
                <button type="submit" className="btn btn-dark btn-contact">Enviar</button>
            </form>
        </section>
    );
} 

export default SectionContact;
