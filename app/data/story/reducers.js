import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

function state(state = { error: {} }, action = {}) {
  switch (action.type) {
    case ActionTypes.FAILURE_HAS_STORY: {
      const { error } = action;
      return { ...state, error };
    }
    default: {
      return state;
    }
  }
}

function hasStory(state = false, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_HAS_STORY: {
      return false;
    }
    case ActionTypes.SUCCESS_HAS_STORY: {
      return action.hasStory;
    }
    case ActionTypes.FAILURE_HAS_STORY: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  state,
  hasStory,
});
