import Mobile from '../../assets/Mobile.svg'

import './styles.scss';

export function AboutMobile() {
  return (
    <div className="container-mobile">
    <div className="About-mobile">
      <h1><span>Tenha tudo</span> na palma das suas mãos!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus elit in vulputate blandit. Quisque vel dictum urna. Duis imperdiet ultrices est, eget euismod elit ultrices at. Suspendisse venenatis ultrices metus, sed molestie felis dictum sed. Maecenas porttitor vulputate est sit amet cursus.</p>
    </div>
    <div className="Imagem-mobile">
      <img src={Mobile} alt="mobile" />
    </div>
  </div>
  );
}