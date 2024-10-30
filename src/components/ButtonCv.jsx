import cvCurriculum from '../../public/cv-lucas-chero.pdf'

const ButtonCv = () => {
    return (
        <a download="cv-Lucas-Chero" className='btn btn-light btn-cv' href={cvCurriculum}>Descargar CV</a>
    )
}

export default ButtonCv;