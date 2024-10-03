export default function Etude({etude, details, date, type, de, id}) {
    return <article>
        
        <div className="titre">
        <span className="id">
            {id}
        </span>{' - '}
        {type} {de} {etude}
        </div> <br />
        <div className="details">
        - {details}
        </div>
        <span>
           année : {date}
        </span>
    </article>
}