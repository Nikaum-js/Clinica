import Logo from '../../assets/Logo.svg'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

import './styles.scss'

export function Navbar() {
  return (
  <>
      <nav id="mobile">
        <img src={Logo} alt="logo" />
        <input type="checkbox" id="checkbox"/>
        <label id="checkboxLabel" for="checkbox" class="menu">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </label>
        
        <ul class="collapsed">
        <input type="checkbox" id="checkbox"/>
        <label id="checkboxLabel" for="checkbox" class="menu">
          <AiOutlineClose id="x" fontSize="35px" />
        </label>
          <li><a id="lineGreen" href="#home">Home</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#teraph">Teraph</a></li>
          <li><a href="#sobrenos">Sobre nós</a></li>
          <button>Login</button>
        </ul>
      </nav>


      <nav id="desktop">
        <img src={Logo} alt="logo" />
        <ul>
          <li><a id="lineGreen" href="#home">Home</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#teraph">Teraph</a></li>
          <li><a href="#sobrenos">Sobre nós</a></li>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </ul> 
      </nav>
</>
  );
}