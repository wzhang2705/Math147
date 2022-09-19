import './App.css';
import Nav from './components/nav/nav';
import Background from './components/background/background';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Scroll from './components/scroll/scroll';
import About from './components/about/about';

function App() {
  function scrolling() {
    console.log("hello")
  }

  return (
    <div className="App">
      {/* <svg height="210" width="500">
        <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
      </svg> */}
      <Background/>
      <Nav/>
      {/* <Header/>
      <Projects/> */}
      <Scroll onScroll={scrolling}/>
      <Projects/>
      <About/>
    </div>
  );
}

export default App;
