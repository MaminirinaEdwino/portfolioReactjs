export default function Projet({titre, details, language, image, lien, id}) {
    return <article>
        <div className="titre">
            {id+' - '}{titre}
        </div>
        <div className="boiteImg">
        <img src={image} alt={titre} />
        </div>
        <details>
            {details} 
        </details>
        {language.map((lang, i)=> <div className="lang">
            {' - '+lang}
        </div> )}
        <div className="lien">Lien :{' '}
        <a href={lien}> {lien} </a>
        </div>

    </article>
}