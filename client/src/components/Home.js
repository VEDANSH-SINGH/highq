import React from "react";
import "../css/Home.css";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        {/*<svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="69%">
              HighQ
            </text>
            <text text-anchor="middle" x="52%" y="80%"></text>
          </symbol>

          <g class="g-ants">
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
          </g>
        </svg> */}
        <h1>HighQ</h1>

        <div className="home-motto">
          <Typed
            className="home-motto-type"
            strings={["Here you can find anything"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
