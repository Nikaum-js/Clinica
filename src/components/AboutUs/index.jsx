import Team from '../../assets/team.svg'

import './styles.scss';

export function AboutUs() {
  return (
    <div className="container-aboutUs">
      <div className="Imagem-aboutUs">
        <img src={Team} alt="nosso time" />
      </div>
      <div className="About-aboutUs">
        <h1> Sobre a nossa <span>equipe</span> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus elit in vulputate blandit. Quisque vel dictum urna. Duis imperdiet ultrices est, eget euismod elit ultrices at. Suspendisse venenatis ultrices metus, sed molestie felis dictum sed. Maecenas porttitor vulputate est sit amet cursus.</p>
      </div>
  </div>
  );
}