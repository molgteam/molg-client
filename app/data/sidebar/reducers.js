import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

function show(state = false, action = {}) {
  switch (action.type) {
    case ActionTypes.SHOW_SIDEBAR: {
      return action.show;
    }
    case ActionTypes.HIDE_SIDEBAR: {
      return action.show;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ show });
