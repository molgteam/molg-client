import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

function global(state = '', action = {}) {
  switch (action.type) {
    case ActionTypes.SET_GLOBAL_NAVIGATION: {
      return action.pathname;
    }
    default: {
      return state;
    }
  }
}

function user(state = '', action = {}) {
  switch (action.type) {
    case ActionTypes.SET_USER_NAVIGATION: {
      return action.pathname;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ global, user });
