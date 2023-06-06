import './OrbitButton.scss';

import { useState } from 'react'; 

const tags = {
  callToAction: '<Download CV/>',
}

const OrbitButton = () => {
  const { callToAction } = tags;
  // const eclipse = document.querySelector(".planetEclipse")!;
  // const moons = document.querySelectorAll(".moonEclipse");
  // const background = document.querySelector(".background")!;

  // function animate() {
  //   eclipse.classList.add("planetAnimation");

  //   setTimeout(() => {
  //     moons.forEach(moon => {
  //       moon.classList.add("moonAnimation");
  //     })
  //   }, 3000);

  //   setTimeout(() => {
  //     background.classList.add("loaderFadeOutAnimation");
  //   }, 5500);

  // }
  const [isMouseOver, setIsMouseOver] = useState(false);
  const onMouseEnter = () => setIsMouseOver(true);
  const onMouseLeave = () => setIsMouseOver(false);

  return (
    <div className='loader'>
      <div className="ring inner"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div className={`${isMouseOver ? 'hovered' : ''} `}>
          <div className={`button ${isMouseOver ? 'buttonHovered' : ''}`}>
            {callToAction}
          </div>
        </div>
      </div>
      <div className="ring middle"></div>
      <div className="ring outer"></div>
      <div className="innerMoonA moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
      <div className="innerMoonB moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
      <div className="middleMoonA moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
      <div className="middleMoonB moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
      <div className="outerMoonA moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
      <div className="outerMoonB moonContainer">
        <div className="moon">
          <div className="moonEclipse"></div>
        </div>
      </div>
    </div>
  );
}

export default OrbitButton;