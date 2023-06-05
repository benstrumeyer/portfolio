import './OrbitButton.scss';

const OrbitButton = () => {
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

  return (
    <div className="loader">
      <div className="planet">
        <div className="planetEclipse"></div>
      </div>
      <div className="ring inner"></div>
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