import './background.css';
import { Diamond } from "react-awesome-shapes";
import React from "react"

function Background() {

  return (
    <div className="background">
        <Diamond
        color="rgb(185, 131, 255,0.1)"
        size="500px"
        zIndex={0}
        left="-150px"
        top="-170px"
        />
        <Diamond
        color="rgb(255, 83, 83, 0.07)"
        size="500px"
        zIndex={0}
        left="-60px"
        top="-210px"
        />
        <Diamond
        color="rgb(83, 172, 255, 0.05)"
        size="200px"
        zIndex={0}
        left="100px"
        top="-75px"
        />
        <Diamond
        color="rgb(237, 111, 41, 0.04)"
        size="200px"
        zIndex={0}
        left="150px"
        top="-70px"
        />
        <Diamond
        color="rgb(255, 223, 112, 0.09)"
        size="200px"
        zIndex={0}
        left="200px"
        top="-90px"
        />
        <Diamond
        color="rgb(185, 131, 255,0.1)"
        size="500px"
        zIndex={0}
        right="-200px"
        top="-150px"
        />
        <Diamond
        color="rgb(237, 111, 41, 0.04)"
        size="500px"
        zIndex={0}
        right="-60px"
        top="-250px"
        />
        <Diamond
        color="rgb(83, 172, 255, 0.03)"
        size="200px"
        zIndex={0}
        right="60px"
        top="-90px"
        />
        {/* <Diamond
        color="rgb(185, 131, 255,0.1)"
        size="500px"
        zIndex={0}
        left="-350px"
        top="-260px"
        position="fixed"
        />
        <Diamond
        color="rgb(255, 83, 83, 0.07)"
        size="500px"
        zIndex={0}
        left="-100px"
        top="-430px"
        position="fixed"
        />
        <Diamond
        color="rgb(83, 172, 255, 0.05)"
        size="200px"
        zIndex={0}
        left="190px"
        top="-140px"
        position="fixed"
        />
        <Diamond
        color="rgb(237, 111, 41, 0.04)"
        size="200px"
        zIndex={0}
        left="280px"
        top="-130px"
        position="fixed"
        />
        <Diamond
        color="rgb(255, 223, 112, 0.09)"
        size="200px"
        zIndex={0}
        left="390px"
        top="-190px"
        position="fixed"
        />
        <Diamond
        color="rgb(185, 131, 255,0.1)"
        size="500px"
        zIndex={0}
        right="-450px"
        top="-260px"
        position="fixed"
        />
        <Diamond
        color="rgb(237, 111, 41, 0.04)"
        size="200px"
        zIndex={0}
        right="50px"
        top="-150px"
        position="fixed"
        />
        <Diamond
        color="rgb(83, 172, 255, 0.03)"
        size="200px"
        zIndex={0}
        right="130px"
        top="-190px"
        position="fixed"
        /> */}
    </div>
  );
}

export default Background;
