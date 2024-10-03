import './css/dist/projets.css'
import quote from '../../../public/imageProjets/quote.png'
import domino from '../../../public/imageProjets/domino.png'
import snake from '../../../public/imageProjets/snake.png'
import Projet from './projet'
export default function Projets() {
    const listeProjet = [
        {
            titre: "Quote liste",
            details: "Une application web qui permet de trouver des citations en ligne plus rapidement",
            language: [
                "ReactJs",
                "TailwindCss"
            ],
            image: quote,
            lien: 'github.com'
        },
        {
            titre: "DominoPro",
            details: "Un jeu de domino avec un adversaire basé sur un algorithme avancé",
            language: [
                "ReatJs",
                "Javascript",
                "TailwindCss"
            ],
            image: domino,
            lien: 'github.com'
        },
        {
            titre: "Snake Game",
            details: "Jeu de serpent",
            language: [
                "Javascript",
                "tailwindCss"
            ],
            image:snake,
            lien: 'github.com'
        }
    ]
    return <div className="projets" id="projet">
        <h1>Projets Personnels</h1>
        {listeProjet.map((projet, i) => <Projet titre={projet.titre} id={i+1} details={projet.details} language={projet.language} image={projet.image} lien={projet.lien}/>)}
    </div>
}