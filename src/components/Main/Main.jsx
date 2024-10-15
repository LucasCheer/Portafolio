import './Main.css'
import SectionAbout from './SectionAbout/SectionAbout.jsx'
import SectionContact from './SectionContact/SectionContact.jsx'
import SectionProjects from './SectionProjects/SectionProjects.jsx'


function Main() {
    return (
        <>
            <SectionAbout />
            <SectionProjects />
            <SectionContact />
        </>
    )
}

export default Main