
import SousTitre from "./soustitre";
import { BsArrowDown } from "react-icons/bs";

export default function Titre() {

    return <div className="titre">
       
        <div className="bienvenue">
            Bienvenue sur mon PortFolio 
            
        </div> 
        <a href="#presentation" className="suivant">Suivant</a>
        <div className="presentation" id="presentation">
        Je suis Edwino 
        <SousTitre/>
        </div>
        <div className="deco">
            
        </div>
        
    </div>
}