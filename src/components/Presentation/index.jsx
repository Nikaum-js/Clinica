import Medicine from '../../assets/Medicine.svg'

import './styles.scss'

export function Presentation() {
  return (
    <main>
      <section>
        <h1><span>Agende</span> agora a sua consulta ou exame médico!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pretium porttitor. Etiam at porta eros, vel faucibus urna.</p>
        <button>Agendar</button>
      </section>
      
      <figure>
        <img id="home" src={Medicine} alt="imagem medico" />
      </figure>
    </main>
  );
}