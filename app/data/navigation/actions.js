import * as ActionTypes from '@app/data/rootAcionType';

export function setGlobalNavigation(pathname) {
  return {
    type: ActionTypes.SET_GLOBAL_NAVIGATION,
    pathname,
  };
}

export function setUserNavigation(pathname) {
  return {
    type: ActionTypes.SET_USER_NAVIGATION,
    pathname,
  };
}
