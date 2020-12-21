import { useEffect } from 'react';

const ActiveGlobalNavigation = ({ location, setGlobalNavigation }) => {
  useEffect(() => {
    setGlobalNavigation(location.pathname);
  }, []);
  return null;
};

export default ActiveGlobalNavigation;
