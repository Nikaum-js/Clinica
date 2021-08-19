import Logo from '../../assets/Logo.svg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";

import './styles.scss';

export function Footer() {
  return (
    <footer>
      <img src={Logo} />
      <div className="footer">
        <span>+55 11 27882-3232</span>
        <br/>
        <span>email@gmail.com</span>
      </div>
      <div className="links">
        <h2>Links</h2>
        <span><a href="#home">Home</a></span>
        <span>Aplicativo</span>
        <br/>
        <br/>
        <br/>
        <span>Exames</span>
        <span>Agendar</span>
        <div className="newsletter">
        <input placeholder="E-mail" type="email" />
        <div className="icon">
        <IoIosArrowRoundForward color="white" fontSize="45px" />
        </div>
        </div>
      </div>
      <div className="line">
      </div>
    <div className="ending">
      <div className="social-icons">       
        <TiSocialTwitter fontSize="30px" />
        <TiSocialYoutube fontSize="30px" />
        <TiSocialLinkedin fontSize="30px" />
        <TiSocialInstagram fontSize="30px" />
      </div>
      <h2>© 2021 Clínica. Todos direitos reservados</h2>
    </div>

    </footer>
  );
}