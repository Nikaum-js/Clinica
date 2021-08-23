import Mobile from '../../assets/Mobile.svg'

import './styles.scss'

export function Presentation() {
  return (
    <main>
      <section>
        <h1><span>Sua Plataforma </span> de Atendimento e Gerenciamento de clientes. </h1>
        <p>Você pode melhorar seus resultados na clínica com organização e segurança. Conheça nossos serviços e seja mais um parceiro. </p>
        <button>Criar Cadastro</button>
      </section>
      
      <figure>
        <img id="home" src={Mobile} alt="imagem medico" />
      </figure>
    </main>
  );
}