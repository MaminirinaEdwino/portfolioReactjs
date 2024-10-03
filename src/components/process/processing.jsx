export default function Processing({loader}) {
    return <div className="texteTerminale">
        emaminirina@fedora: portfolio$ ./portfolio <br />
        -{'>'} Launching portfolio . . . <br />
        -{'>'} Loading {loader} % <br />
        {loader == 100 && "-> OK"}
    </div>
}