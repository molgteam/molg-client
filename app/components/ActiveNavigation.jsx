import { useEffect } from 'react';

const ActiveNavigation = ({ location, setNavigation }) => {
  useEffect(() => {
    const firstPathname = location.pathname.split('/')[1];
    setNavigation(`/${firstPathname}`);
  }, []);
  return null;
};

export default ActiveNavigation;
