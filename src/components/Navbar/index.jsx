import Logo from '../../assets/Logo.svg'

import './styles.scss'

export function Navbar() {

  return (
      <nav>
      <img src={Logo} alt="logo" />
        <ul>
          <li id="Home"><a>Home</a></li>
          <li id="Planos"><a>Planos</a></li>
          <li id="Agendar">Agendar</li>
          <li id="Exames">Exames</li>
          <li id="SobreNós"><a>Sobre nós</a></li>
        </ul>
      </nav>

  );
}