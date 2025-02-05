import '../styles/sections/SectionProjects.css';

import CardProject from '../components/CardProject.jsx';
import iconHtml from '../assets/images/techs/html-icon.svg';
import iconCss from '../assets/images/techs/css-icon.svg';
import iconJs from '../assets/images/techs/js-icon.svg';
import iconSass from '../assets/images/techs/sass-icon.svg';
import iconBootstrap from '../assets/images/techs/bootstrap-icon.svg';
import iconFigma from '../assets/images/techs/figma-icon.svg';
import iconReact from '../assets/images/techs/react-icon.svg';
import iconAngular from '../assets/images/techs/angular-icon.svg';
import iconNode from '../assets/images/techs/nodejs-icon.svg';
import iconExpress from '../assets/images/techs/express-icon.svg';
import nestJS from '../assets/images/techs/nestjs-icon.svg';
import iconMysql from '../assets/images/techs/mysql-icon3.svg';
import iconMongodb from '../assets/images/techs/mongodb-icon3.svg';
import csharp from '../assets/images/techs/c-sharp-icon.svg';
import {hein, pokedex} from '../assets/images/projects/index.js';

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
                            <img src={iconHtml} alt="Icono HTML" />
                            <figcaption>HTML</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconCss} alt="Icono CSS" />
                            <figcaption>CSS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconJs} alt="Icono JavaScript" />
                            <figcaption>JavaScript</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconSass} alt="Icono Sass" />
                            <figcaption>Sass</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconBootstrap} alt="Icono Bootstrap" />
                            <figcaption>Bootstrap</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconFigma} alt="Icono Figma" />
                            <figcaption>Figma</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconReact} alt="Icono React" />
                            <figcaption>ReactJS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconAngular} alt="Icono Angular" />
                            <figcaption>Angular</figcaption>
                        </article>  
                        
                    </div>
                </div>
                <div className="container-type back-end">
                    <h4 className="skill-type">Backend</h4>
                    <div className="skill-grid">
                        <article className="item-skill">
                            <img src={iconNode} alt="Icono NodeJS" />
                            <figcaption>NodeJS</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconExpress} alt="Icono Express" />
                            <figcaption>Express</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={csharp} alt="Icono C#" />
                            <figcaption>C#</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconMysql} alt="Icono MySQL" />
                            <figcaption>MySQL</figcaption>
                        </article>
                        <article className="item-skill">
                            <img src={iconMongodb} alt="Icono MongoDB" />
                            <figcaption>MongoDB</figcaption>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProyects