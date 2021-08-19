import pricing from '../../assets/pricing.svg'

import './styles.css'

export function Pricing() {
  return (
  <>
    <div className="image">
      <h1><span>Selecione</span> o melhor plano para você!</h1>
      <img src={pricing} alt="preços" />
    </div>
    <div className="grid">
      <div className="container-pricing">
        <div className="box">
          <div className="title">
            <i className="fa fa-paper-plane"></i>
            <h2>Basic</h2>
          </div>
          <div className="price">
            <h4><sup>R$</sup>25</h4>
          </div>
          <div className="option">
            <ul>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
            </ul>
          </div>
            <a href="#">Assine agora!</a>
        </div>
      </div>
      <div className="container-pricing">
        <div className="box">
          <div className="title">
            <i className="fa fa-paper-plane"></i>
            <h2>Basic</h2>
          </div>
          <div className="price">
            <h4><sup>R$</sup>39</h4>
          </div>
          <div className="option">
            <ul>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
            </ul>
          </div>
            <a href="#">Assine agora!</a>
        </div>
      </div>
      <div className="container-pricing">
        <div className="box">
          <div className="title">
            <i className="fa fa-paper-plane"></i>
            <h2>Basic</h2>
          </div>
          <div className="price">
            <h4><sup>R$</sup>60</h4>
          </div>
          <div className="option">
            <ul>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
              <li><i className="fa fa-check"></i>Alguma coisa interessante</li>
            </ul>
          </div>
            <a href="#">Assine agora!</a>
        </div>
      </div>

    </div>
  </>
  );
}