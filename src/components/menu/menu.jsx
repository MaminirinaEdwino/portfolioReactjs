
import { GiSkills } from 'react-icons/gi'
import './css/dist/menu.css'
import { PiCode, PiGraduationCap, PiUser } from 'react-icons/pi'
import { GrContact } from 'react-icons/gr'
export default function Menu() {
    return <nav>
        <div className="choix" >
            <a href="#details">
                <PiUser />
                <span>
                    Détails
                </span>
            </a>

        </div>
        <div className="choix">
            <a href="#etudes">
                <PiGraduationCap />
                <span>Etudes</span>
            </a>
        </div>
        <div className="choix">
            <a href="#skills">
                <GiSkills />
                <span>
                    Skills
                </span>
            </a>
        </div>
        <div className="choix">
            <a href="#projet">
                <PiCode />
                <span>
                    Projets
                </span>
            </a>
        </div>
        <div className="choix">
            <a href="#contact">
                <GrContact />
                <span>
                    Contacts
                </span>
            </a>
        </div>
    </nav>
}