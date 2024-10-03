import "./css/dist/etudes.css";
import Etude from "./etude";

export default function Etudes() {
    const listeEtude = [
        {
            etude: "Baccalauréat",
            details: "Série C",
            date: "2020",
            type: "Diplome",
            de: "de",
        },
        {
            etude: "Maintenance informatique",
            details: "Maintenance Hardware et Software",
            date: "2021",
            type: "Certificat",
            de: "en",
        },
        {
            etude: "Licence",
            details:
                "Licence professionnel en developpement d'application informatique",
            date: "2024",
            type: "Diplome",
            de: "de",
        },
    ];
    return (
        <div className="etudes" id="etudes">
            <h1>Etudes et Diplomes</h1>
            {listeEtude.map((etud, i) => (
                <Etude
                    key={i}
                    id={i+1}
                    etude={etud.etude}
                    details={etud.details}
                    date={etud.date}
                    type={etud.type}
                    de={etud.de}
                />
            ))}
        </div>
    );
}
