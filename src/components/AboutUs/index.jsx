import Team from '../../assets/team.svg'

import './styles.scss';

export function AboutUs() {
  return (
    <div className="container-aboutUs">
      <div className="Imagem-aboutUs">
        <img id="sobrenos" src={Team} alt="nosso time" />
      </div>
      <div className="About-aboutUs">
        <h1> Sobre a nossa <span>equipe</span> </h1>
        <p>Nossa empresa nasceu do desejo de alguns amigos de transformar a experiência de atendimentos clínicos em algo muito mais simples e prático. Nossa missão é sempre inovar em ambientes que podem favorecer a vida das pessoas, transformando os atendimentos em interações seguras e próximas diminuindo a burocracia e as distâncias e as dificuldades que podem interferir neste processo. Também compartilhamos sonhos com as pessoas, sonhamos com um mundo onde cada vez mais clientes tenham acesso às mais variadas formas de cuidado terapêutico. Queremos fazer um pouco por você, para que você faça um pouco pelo mundo.</p>
      </div>
  </div>
  );
}