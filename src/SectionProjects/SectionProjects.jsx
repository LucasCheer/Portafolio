import {Angular, Bootstrap, Css, Express, Figma, Html, Js, Mongodb, Mysql, Node, React, Sass, Nest, Csharp} from '../assets/images/techs/index.js';

function SectionProyects() {
    return (
        <section id="projects-section" className="section">
            <h2 id="title-project" className="titles" >Proyectos<span className="point">.</span></h2>
            <p  id="subtitle-project" className="subtitle">Algunos de mis proyectos...</p>
            <div id="container-projects">
                <CardProject
                    title="Hein" 
                    description="Plataforma de gestion y seguimiento emocional" 
                    techs={['Javascript', 'Sass', 'Node.js', 'Express']}
                    imgProject={hein}
                    link={"https://hein-emociones.netlify.app"}
                    linkRepo={"https://github.com/LucasCheer/Hein"}
                />
                <CardProject
                    title="Pokedex App" 
                    description="Pokedex informativa de Pokemons de distintos tipos" 
                    techs={['Javascript', 'React',]}
                    imgProject={pokedex}
                    link={"no disponible"}
                    linkRepo={"https://github.com/LucasCheer/Pokedex-React"}
                />
            </div>
            <h2 className="subtitle title-skills">Tecnologías</h2>
            <p className="about-me-text">Lenguajes, Frameworks y Herramientas con las que me siento comodo.</p>
            <div id="container-skills">
                <div className="container-type front-end">
                    <h4 className="skill-type">Frontend</h4>
                    <div className="skill-grid">
                        <article className="item-skill">
                            <img src={Html} alt="Icono HTML" />
                            <figcaption>HTML</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Css} alt="Icono CSS" />
                            <figcaption>CSS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Js} alt="Icono JavaScript" />
                            <figcaption>JavaScript</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Sass} alt="Icono Sass" />
                            <figcaption>Sass</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Bootstrap} alt="Icono Bootstrap" />
                            <figcaption>Bootstrap</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Figma} alt="Icono Figma" />
                            <figcaption>Figma</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={React} alt="Icono React" />
                            <figcaption>ReactJS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Angular} alt="Icono Angular" />
                            <figcaption>Angular</figcaption>
                        </article>  
                        
                    </div>
                </div>
                <div className="container-type back-end">
                    <h4 className="skill-type">Backend</h4>
                    <div className="skill-grid">
                        <article className="item-skill">
                            <img src={Node} alt="Icono NodeJS" />
                            <figcaption>NodeJS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Express} alt="Icono Express" />
                            <figcaption>Express</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Nest} alt="Icono NestJS" />
                            <figcaption>NestJS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Csharp} alt="Icono C#" />
                            <figcaption>C#</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Mysql} alt="Icono MySQL" />
                            <figcaption>MySQL</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={Mongodb} alt="Icono MongoDB" />
                            <figcaption>MongoDB</figcaption>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProyects