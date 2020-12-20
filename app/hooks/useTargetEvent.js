import { useCallback, useEffect } from 'react';

const useTargetEvent = ({ inner, outer = () => {} }, target) => {
  const callback = useCallback((ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    if (Array.from(ev.target.classList).indexOf(target) !== -1) {
      inner(ev);
    } else {
      outer(ev);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', callback);
    return () => {
      document.body.removeEventListener('click', callback);
    };
  }, []);
};

export default useTargetEvent;
