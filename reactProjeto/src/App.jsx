import { useState } from "react"

import Perfil from "./components/Perfil";

// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
      <>
        <input type="text" className="inputStyle" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite seu perfil do GitHub"/>
        {nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsuario={nomeUsuario}></Perfil>
            <ReposList nomeUsuario={nomeUsuario}></ReposList>
          </>
        )}

        {/* {formularioEstaVisivel && (
          <Formulario></Formulario>
        )}

          <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
      </>
  )
}

export default App
