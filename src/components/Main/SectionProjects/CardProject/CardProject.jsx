import Pill from './Pill/Pill.jsx';
import imgProject from '../../../../assets/images/project-img.jpg';
import iconGit from '../../../../assets/images/github-icon2.svg';
import iconLink from '../../../../assets/images/link-icon.svg';


function CardProject({title, description, techs = []}) {

    return (
        <article className="project-num">
            <figure className="photo-project">
                <a href="#"> <img src={imgProject} alt="Imagen del proyecto" /></a>
            </figure>

            <div className="info-project">
                <h2>{title}</h2>
                <div className="tablet-container">
                    {techs.map((tech) => <Pill text={tech} />)} 
                </div>
                <p className="descrip-project">{description}</p>
            </div>
            <div className="btn-container">
                <button className="btn btn-light btn-projects"><img id='icon-git' className='icon' src={iconGit} alt="Icono Git"/>Repositorio</button>
                <button className="btn btn-projects btn-dark"><img className='icon' src={iconLink} alt="Icono Link" />Demo</button>
            </div>
        </article>
    )
}

export default CardProject;