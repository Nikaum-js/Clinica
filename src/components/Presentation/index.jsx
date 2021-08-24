import { Link } from 'react-router-dom'
import Mobile from '../../assets/Mobile.svg'

import './styles.scss'

export function Presentation() {
  return (
    <main>
      <section>
        <h1><span>Sua Plataforma </span> de Atendimento e Gerenciamento de clientes. </h1>
        <p>Você pode melhorar seus resultados na clínica com organização e segurança. Conheça nossos serviços e seja mais um parceiro. </p>
        <Link to="/login">
          <button>Criar Cadastro</button>
        </Link>
      </section>
      
      <figure>
        <img id="home" src={Mobile} alt="imagem medico" />
      </figure>
    </main>
  );
}