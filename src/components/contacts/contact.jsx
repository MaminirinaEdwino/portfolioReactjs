export default function Contact({titre, details}) {
    return <article>
        <span className="titre"> {titre} </span> :
        <span className="details"> {details} </span>
    </article>
}