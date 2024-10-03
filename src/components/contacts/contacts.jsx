import Contact from './contact'
import './css/dist/contacts.css'
import Email from './email'

export default function Contacts() {
    const listeContact = [
        [
            "Téléphone",
            "+261 34 78 829 25"
        ],
        [
            "Adresse",
            "Lot B 144 II Ankazobe, Moramanga, Madagascar"
        ],
        [
            "Email",
            "Edwinomaminirina@gmail.com"
        ]
    ]
    return <div className="contact" id='contact'>
        <div className="contactMe">
            <h1>Contactez Moi</h1>
            {listeContact.map((contact, i) => <Contact titre={contact[0]} details={contact[1]} />)}
        </div>
        <div className="emailMoi">
            <Email/>
        </div>

    </div>
}