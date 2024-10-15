import './CardProject.css';

function CardProject({title, description}) {

    return (
        <article class="project-num">
            <figure class="photo-project">
                <a href="#"></a>
            </figure>

            <div class="info-project">
                <h2>{title}</h2>
                <div class="tablet-container">
                    <div class="tablet">HTML</div>
                    <div class="tablet">CSS</div>
                </div>
                <p class="descrip-project">{description}</p>
            </div>
            <div class="btn-container">
                <button class="btn btn-light btn-projects">Repositorio</button>
                <button class="btn btn-projects btn-dark">Demo</button>
            </div>
        </article>
    )
}

export default CardProject;