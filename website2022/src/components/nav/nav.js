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
        <Links word="home"/>
        <Links word="projects"/>
        <Links word="experience"/>
        <Links word="about"/>
      </div>
    </div>
  );
}

export default Nav;
