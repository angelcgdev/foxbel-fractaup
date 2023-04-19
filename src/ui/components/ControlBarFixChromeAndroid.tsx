import { useEffect, useRef } from 'react';
import { withTrack } from './hoc/withTrack/withTrack';
import { ControllBar } from './ControlBar/Controlbar';

const ControlBarWithTrack = withTrack(ControllBar);

export const ControlBarFixChromeAndroid = () => {
  const divHiddenRef = useRef<HTMLElement>(null);
  const ref = useRef(true);
  const node = document.createElement('div');
  function onResize() {
    ref.current = !ref.current;
    if (divHiddenRef.current != null) {
      divHiddenRef.current.replaceChild(node, node);
    }
  }
  useEffect(() => {
    if (divHiddenRef.current != null) {
      divHiddenRef.current.appendChild(node);
    }
    addEventListener('resize', onResize);
    return () => {
      removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <ControlBarWithTrack
      ref={divHiddenRef}
      className='sticky bottom-0 z-10'
    />
  );
};
