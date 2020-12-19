import * as ActionTypes from '@app/data/rootAcionType';

export function showSidebar(show) {
  return {
    type: ActionTypes.SHOW_SIDEBAR,
    show,
  };
}

export function hideSidebar(show) {
  return {
    type: ActionTypes.HIDE_SIDEBAR,
    show,
  };
}
