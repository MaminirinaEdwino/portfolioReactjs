import './css/dist/infoPerso.css'
import DetailsPerso from './detailsPerso'

export default function InfoPerso() {
    const listeInfoPerso = [
        "Je suis RAFITOARISOA Maminirina Edwino",
        "J'ai 22 ans",
        "Je suis étudiant en informatique",
        "et Développeur Web"
    ]
    const listeLoisir = [
        "Je joue à des Jeux vidéos",
        "Et aussi de la Guitare",
        "Et pratique le Karate"
    ]
    const listeQualité = [
        "Je suis sociable",
        "Je m'adapte à tous les cituations",
        "J'adore les défis"
    ]
    return <div className="information" id='details'>
        <div className="detailsTitre">
            A propos de Moi
        </div>
        <DetailsPerso titre={"Informations Personnelles"}
        details={listeInfoPerso}
        />
        <DetailsPerso titre={"Loisirs"} details={listeLoisir}/>
        <DetailsPerso titre={"Qualités"} details={listeQualité}/>
    </div>
}