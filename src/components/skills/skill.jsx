export default function Skill({titre, logo, niveau, id}) {
    let testeLogo = ''
    if (titre == 'ReactJs') {
        testeLogo = "tourne"
    }
    return <article>
        <div className="titre">
            {id+' - '}{titre}
        </div>
        <div className={"logo "+testeLogo}>
            {logo}
        </div>
        <div className={"niveau"}>
            Niveau : {" "}
            {niveau == 1 && "Débutant"}
            {niveau == 2 && "Intermédiaire"}
            {niveau == 3 && "Avancé"}
        </div>
    </article>
}