import './scroll.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Header from "../header/header";
import Projects from "../projects/projects";

function Scroll() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer>
        <ScrollPage>
          <div className="scrollPage">
            <Animator animation={batch(Fade(0,1), Sticky(), MoveOut(0, -500))}>
              <Header/>
            </Animator>
          </div>
        </ScrollPage>
        {/* <ScrollPage>
          <div className="scrollPage">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Projects/>
            </Animator>
          </div>
        </ScrollPage> */}
        {/* <ScrollPage>
          <Projects/>
        </ScrollPage> */}
        {/* <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>How are you doing? ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>How 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>dee 🙋🏻‍♀️</Animator>
              <Animator animation={MoveOut(1000, 0)}>do ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>buckaroo 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br/>
            <span style={{ fontSize: "30px" }}>
              That's all folks!
            </span>
          </Animator>
        </ScrollPage> */}
      </ScrollContainer>
    );
}
  
export default Scroll;