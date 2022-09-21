import './header.css';
import TypeWriterEffect from 'react-typewriter-effect';
import MovingComponent from 'react-moving-text';

function Header() {

  return (
    <div className = "heading">
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          wen zhang 💫
          <p className="program">University of Waterloo // Computer Science & Business</p>
        </MovingComponent>
        <div className = "intro">
          <MovingComponent
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className="text">
              I am a  
            </div>
          </MovingComponent>
          <TypeWriterEffect
            textStyle={{
            color: 'rgb(82, 51, 193)',
            fontWeight: 400,
            fontSize: 'calc(10px + 2vmin)',
            textAlign: 'center',
            }}
            startDelay={1200}
            cursorColor="rgb(82, 51, 196)"
            multiText={[
                'student',
                'software developer',
                'researcher',
                'skier/snowboarder',
                ]}
            multiTextLoop={true}
            nextTextDelay={1000}
            typeSpeed={30}
          />
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  );
}

export default Header;
