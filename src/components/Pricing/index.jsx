import pricing from '../../assets/pricing.svg'

import './styles.css'

export function Pricing() {
  return (
  <>
    <div className="image">
      <h1><span>Selecione</span> o melhor plano para você!</h1>
      <img  id="planos" src={pricing} alt="preços" />
    </div>
    <div className="grid">
      <div className="container-pricing">
        <div className="box">
          <div className="title">
            <i className="fa fa-paper-plane"></i>
            <h2>Básico</h2>
          </div>
          <div className="price">
            <h4><sup>R$</sup>69</h4>
          </div>
          <div className="option">
            <ul>
            <li><i className="fa fa-check"></i>Documentos Psicológicos</li>
            <li><i className="fa fa-check"></i>Agendamentos</li>
              <li><i className="fa fa-check"></i>1 profissional</li>
              <li><i className="fa fa-check"></i>Notificações </li>
              <li><i className="fa fa-check"></i>Evoluções</li>
              <li><i className="fa fa-check"></i>Anamneses</li>
            </ul>
          </div>
            <a href="#">Assine agora!</a>
        </div>
      </div>
      <div className="container-pricing">
        <div className="box">
          <div className="title">
            <i className="fa fa-paper-plane"></i>
            <h2>Premium</h2>
          </div>
          <div className="price">
            <h4><sup>R$</sup>130</h4>
          </div>
          <div className="option">
            <ul>
              <li><i className="fa fa-check"></i>Clínica com até 3 funcionários </li>
              <li><i className="fa fa-check"></i>Supervisão de atendimentos</li> 
              <li><i className="fa fa-check"></i>Cadastro de profissionais</li> 
              <li><i className="fa fa-check"></i>Documentos Psicológicos </li>         
              <li><i className="fa fa-check"></i>Acesso secretaria</li> 
              <li><i className="fa fa-check"></i>Agendamentos</li> 
              <li><i className="fa fa-check"></i>Notificações</li>
              <li><i className="fa fa-check"></i>Anamneses</li>
            </ul>
          </div>
            <a href="#">Assine agora!</a>
        </div>
      </div>
    </div>
  </>
  );
}