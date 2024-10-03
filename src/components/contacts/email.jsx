export default function Email() {
    const envoieMail = ()=>{

    }
    return <form action="" onSubmit={envoieMail} method="post" name="form">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content"></textarea>
        <button>Send</button>
    </form>
}