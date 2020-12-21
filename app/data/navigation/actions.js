import * as ActionTypes from '@app/data/rootAcionType';

export function setGlobalNavigation(pathname) {
  return {
    type: ActionTypes.SET_GLOBAL_NAVIGATION,
    pathname,
  };
}
