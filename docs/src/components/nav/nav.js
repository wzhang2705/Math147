import './nav.css';
import Links from '../links/links';
import { useScrollPosition  } from '../../hooks/useScrollPosition';

function Nav() {
  function handleScroll(e) {
    let element = document.querySelector('nav');
    element.setProperty('background-color', 'red');
    console.log("here");
  }

  const scrollPosition = useScrollPosition();

  return (
    <div className={scrollPosition > 0 ? "nav nav-scrolled" : "nav"} onScroll={handleScroll} id="nav">
      <div className="topnav">
        <div className="logo"></div>
      </div>
      <div className="topnav">
        <Links word="home" link="#top" target="_self" />
        <Links word="linkedin" link="https://www.linkedin.com/in/wen-z-waterloocs/" target="_blank" />
        <Links word="resume" link="https://drive.google.com/drive/folders/18Troxqx2dAFlaDiShFitxSKintB0Dpii?usp=sharing" target="_blank"/>
        <Links word="research" link="#research"/>
        <Links word="work" link="#work"/>
        <Links word="teaching" link="#teaching"/>
        <Links word="about" link="#about"/>
      </div>
    </div>
  );
}

export default Nav;
