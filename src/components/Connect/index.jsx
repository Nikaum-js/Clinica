import connect from '../../assets/Conect.svg'

import './styles.scss';

export function Connect() {
  return (
    <div className="container">
      <div className="Imagem">
        <img src={connect} alt="conexão" />
      </div>
      <div className="About-connect">
        <h1><span>Conecte-se</span> com os melhores médicos!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus elit in vulputate blandit. Quisque vel dictum urna. Duis imperdiet ultrices est, eget euismod elit ultrices at. Suspendisse venenatis ultrices metus, sed molestie felis dictum sed. Maecenas porttitor vulputate est sit amet cursus.</p>
      </div>
    </div>
  );
}