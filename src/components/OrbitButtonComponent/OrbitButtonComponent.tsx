import OrbitButton from './OrbitButton';
import './OrbitButtonComponent.scss';

import { RefObject } from 'react';
const tags = {
  callToAction: '<Download CV/>',
}

const OrbitButtonComponent = () => {
  const { callToAction } = tags;

  return (
    <div className='loader'>
      <div className="ring inner">
        <OrbitButton>
          {callToAction}
        </OrbitButton>
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

export default OrbitButtonComponent;