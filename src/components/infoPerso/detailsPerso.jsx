export default function DetailsPerso({
    titre, details
}) {
    return <article>
        <div className="titreDetails">
        {titre}</div>
        <div className="det">
            {details.map((detail, i)=><div key={i+detail} className="detail"> {'-'} {detail}</div>)}
        </div>
    </article>
}