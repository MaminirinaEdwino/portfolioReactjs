import { DiJavascript, DiPhp, DiReact, DiSymfony } from 'react-icons/di'
import './css/dist/skills.css'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { FaPhp, FaPython } from 'react-icons/fa'
import Skill from './skill'
import { LiaSymfony } from 'react-icons/lia'

export default function Skills() {
    const listeTechno = [
        {
            titre : "ReactJs",
            logo : <DiReact/>,
            niveau: 2
        },
        {
            titre : "Javascript",
            logo : <SiJavascript/>,
            niveau : 2
        },
        {
            titre : "Php",
            logo : <FaPhp/>,
            niveau: 3
        },
        {
            titre : "TailwindCss",
            logo : <SiTailwindcss/>,
            niveau : 3
        },
        {
            titre : "Symfony",
            logo : <LiaSymfony/>,
            niveau : 2
        },
        {
            titre : "Python",
            logo : <FaPython/>,
            niveau : 2
        }
    ]
    return <div className="skills" id='skills'>
        <h1>Langage et framework</h1>
        {listeTechno.map((techno, i)=>
            <Skill key={i} id={i+1} titre={techno.titre} logo={techno.logo} niveau={techno.niveau}/>
        )}
    </div>
}