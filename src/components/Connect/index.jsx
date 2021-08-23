import connect from '../../assets/Conect.svg'

import './styles.scss';

export function Connect() {
  return (
    <div className="container">
      <div className="Imagem">
        <img id="teraph" src={connect} alt="conexão" />
      </div>
      <div className="About-connect">
        <h1><span>Teraph</span></h1>
        <p>Nossa plataforma foi desenvolvida com o intuito de melhorar sua experiência com seus pacientes/clientes. Oferecemos um ambiente para que você possa agendar suas consultas, organizar informações pessoais, evoluções e criar documentos profissionais. Tudo isso com muita segurança e criatividade. Seja um profissional de excelência com sua agenda e informações sobre as pessoas que você atende em um só lugar! </p>
      </div>
    </div>
  );
}