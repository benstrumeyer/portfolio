import { useEffect, useRef, RefObject } from 'react';
import Lottie, { LottieRef } from 'lottie-react';
import arrowData from '../../lottie/arrow.json';

import './Arrow.scss';

interface ArrowProps {
  contactRef: RefObject<HTMLDivElement>;
}


const Arrow = (props: ArrowProps) => {
  const lottieRef = useRef<LottieRef | undefined>(undefined);
  const { contactRef } = props;

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    timeoutId = setTimeout(() => {
      lottieRef.current?.current?.play();
    }, 850); // Delay in milliseconds

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className='Arrow'>
      <Lottie
        lottieRef={lottieRef.current}
        animationData={arrowData}
        onClick={scrollToContact}
      />
    </div>
  );
};

export default Arrow;