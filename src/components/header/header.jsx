import { CgClose, CgMaximize, CgMinimize } from 'react-icons/cg'
import './css/dist/header.css'

export default function Header() {
    return <header>
        <div className="titre">Shell Terminal ~ Edwino Portfolio</div>
        <div className="boiteButton">
            <CgMinimize/>
            <CgMaximize/>
            <CgClose/>
        </div>
    </header>
}