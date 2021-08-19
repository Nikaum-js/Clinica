import Logo from '../../assets/Logo.svg'

import './styles.scss'

export function Navbar() {

  return (
      <nav>
      <img src={Logo} alt="logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#agendar"></a>Agendar</li>
          <li><a href="#exames"></a>Exames</li>
          <li><a href="#sobrenos">Sobre nós</a></li>
        </ul>
      </nav>

  );
}