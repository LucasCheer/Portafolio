import imgProject from '../../../../assets/images/project-img.jpg';
import iconGit from '../../../../assets/images/github-icon2.svg';
import iconLink from '../../../../assets/images/link-icon.svg';

function CardProject({title, description}) {

    return (
        <article className="project-num">
            <figure className="photo-project">
                <a href="#"> <img src={imgProject} alt="Imagen del proyecto" /></a>
            </figure>

            <div className="info-project">
                <h2>{title}</h2>
                <div className="tablet-container">
                    <div className="tablet">Javascript</div>
                    <div className="tablet">NodeJs</div>
                </div>
                <p className="descrip-project">{description}</p>
            </div>
            <div className="btn-container">
                <button className="btn btn-light btn-projects"><img src={iconGit} alt="Icono Git"/>Repositorio</button>
                <button className="btn btn-projects btn-dark"><img src={iconLink} alt="Icono Link" />Demo</button>
            </div>
        </article>
    )
}

export default CardProject;