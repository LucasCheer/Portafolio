import './SectionProjects.css';

function SectionProyects() {
    return (
        <section id="projects-section" class="section">
            <h2 id="title-project" class="titles" >Proyectos<span class="point">.</span></h2>
            <p  id="subtitle-project" class="subtitle">Algunos de mis proyectos...</p>
            <div id="container-projects">
                <article class="project-num">
                    <figure class="photo-project">
                        <a href="#">
                        </a>
                    </figure>

                    <div class="info-project">
                        <h2>Acortador de URL</h2>
                        <div class="tablet-container">
                            <div class="tablet">HTML</div>
                            <div class="tablet">CSS</div>
                        </div>
                        <p class="descrip-project">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-light btn-projects">Repositorio
                        </button>
                        <button class="btn btn-projects btn-dark">Demo</button>
                    </div>
                </article>
                <article class="project-num">
                    <figure class="photo-project">
                        <a href="#"></a>
                    </figure>
                    <div class="info-project">
                        <h2>Ladding Page</h2>
                        <div class="tablet-container">
                            <div class="tablet">HTML</div>
                            <div class="tablet">CSS</div>
                        </div>
                        <p class="descrip-project">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-projects btn-light">Repositorio</button>
                        <button class="btn btn-projects btn-dark">Demo</button>
                    </div>
                </article>
                <article class="project-num">
                    <figure class="photo-project">
                        <a href="#">
                        </a>
                    </figure>
                    <div class="info-project">
                        <h2>Advice Generator App</h2>
                        <div class="tablet-container">
                            <div class="tablet">HTML</div>
                            <div class="tablet">CSS</div>
                        </div>
                        <p class="descrip-project">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-projects btn-light">Repositorio</button>        
                        <button class="btn btn-projects btn-dark">Demo</button>
                    </div>
                </article>
                <article class="project-num">
                    <figure class="photo-project">
                        <a href="#">
                        </a>
                    </figure>
                    <div class="info-project">
                        <h2>Hein</h2>
                        <div class="tablet-container">
                            <div class="tablet">HTML</div>
                            <div class="tablet">CSS</div>
                            <div class="tablet">Sass</div>
                            <div class="tablet">NodeJS</div>
                        </div>
                        <p class="descrip-project">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-projects btn-light">Repositorio</button>
                        <button class="btn btn-projects btn-dark">Demo</button>
                    </div>
                </article>
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