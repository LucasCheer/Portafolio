import './SectionProjects.css';
import CardProject from './CardProject/CardProject.jsx';

function SectionProyects() {
    return (
        <section id="projects-section" class="section">
            <h2 id="title-project" class="titles" >Proyectos<span class="point">.</span></h2>
            <p  id="subtitle-project" class="subtitle">Algunos de mis proyectos...</p>
            <div id="container-projects">
                <CardProject title="Hein" description="Plataforma de gestion y seguimiento emocional"/>
                <CardProject title="Pokedex" description="Aplicación web para visualizar información sobre pokemones."/>
                <CardProject title="Ecommerce" description="Gestion de comercio electronico"/>
                <CardProject title="TodoList" description="Lista de tareas"/>
            </div>
            <h2 class="subtitle title-skills">Tecnologías</h2>
            <p class="about-me-text">Lenguajes, Frameworks y Herramientas con las que me siento comodo.</p>
            <div id="container-skills">
                <div class="container-type front-end">
                    <h4 class="skill-type">Frontend</h4>
                    <div class="skill-grid">
                        <article class="item-skill">
                            <figcaption>HTML</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>CSS</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>JavaScript</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>Sass</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>Bootstrap</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>ReactJS</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>NextJS</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>Angular</figcaption>
                        </article>  
                    </div>
                </div>
                <div class="container-type back-end">
                    <h4 class="skill-type">Backend</h4>
                    <div class="skill-grid">
                        <article class="item-skill">
                            <figcaption>NodeJS</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>Express</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>NestJS</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>C#</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>MySQL</figcaption>
                        </article>
                        <article class="item-skill">
                            <figcaption>MongoDB</figcaption>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProyects