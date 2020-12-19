import { useCallback, useEffect } from 'react';

const useTargetEvent = (handler, target) => {
  const callback = useCallback(
    (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      if (Array.from(ev.target.classList).indexOf(target) !== -1) {
        handler(ev);
      }
    },
    [handler],
  );

  useEffect(() => {
    document.body.addEventListener('click', callback);
    return () => {
      document.body.removeEventListener('click', callback);
    };
  }, []);
};

export default useTargetEvent;
