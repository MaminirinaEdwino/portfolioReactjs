import PagePrincipale from "./components/pagePrincipale/pagePrincipale"

import "./assets/dist/App.css"
import Menu from "./components/menu/menu"
import InfoPerso from "./components/infoPerso/infoPerso"
import Etudes from "./components/etudes/etudes"
import Skills from "./components/skills/skills"
import Projets from "./components/projets/projets"
import Contacts from "./components/contacts/contacts"
import Processing from "./components/process/processing"
import { useEffect, useReducer } from "react"

function App() {
  document.title = "Mon portfolio"
  const [loader, Setloader] = useReducer(x => x + 1, 0)
  useEffect(() => {
    setTimeout(() => {
      if (loader <= 99) {
        Setloader()
      }
    }, 10);
  }, [loader])

  return (
    <>
      <Processing loader={loader}/>
      {loader == 100 && <><PagePrincipale />
        <a href="#details" className="suivant">Suivant</a>
      <InfoPerso />
      <a href="#etudes" className="suivant">Suivant</a>
      <Etudes />
      <a href="#skills" className="suivant">Suivant</a>
      <Skills />
      <a href="#projet" className="suivant">Suivant</a>
      <Projets />
      <a href="#contact" className="suivant">Suivant</a>
      <Contacts /></>}
    </>
  )
}

export default App
