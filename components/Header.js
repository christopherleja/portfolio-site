import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export const Header = () => {
  const { width, height } = useWindowSize();
  const bigScreen = width > 1450;

  return (
    <div id="home" className="mx-auto w-screen top-0">
      <div className="header-bg">
        <video
          src={
            bigScreen
              ? "./video/background-big.mp4"
              : "./video/background-standard.mp4"
          }
          autoPlay
          muted
          loop
          className="header-bg-video"
        />
        {/* <div className="w-full bg-transparent text-center"> */}
        <h1 className="h1 text-almond">Christopher Leja</h1>
        <h4 className="h4 text-green-200">Software Engineer</h4>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
