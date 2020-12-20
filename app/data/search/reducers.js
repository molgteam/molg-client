import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';
import { API } from '@app/constants/STATUS';

function state(state = { status: API.INITIAL, error: '' }, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_SEARCH_USERNAME: {
      return { ...state, status: API.REQUEST };
    }
    case ActionTypes.SUCCESS_SEARCH_USERNAME: {
      return { ...state, status: API.SUCCESS };
    }
    case ActionTypes.FAILURE_SEARCH_USERNAME: {
      const { error } = action;
      return { ...state, status: API.FAILURE, error };
    }
    default: {
      return state;
    }
  }
}

function searchingUser(state = '', action = {}) {
  switch (action.type) {
    case ActionTypes.UPDATE_USERNAME: {
      return action.username;
    }
    case ActionTypes.RESET_USERNAME: {
      return '';
    }
    case ActionTypes.STORE_USER_INFO: {
      return action.user.username;
    }
    default:
      return state;
  }
}

function result(state = [], action = {}) {
  switch (action.type) {
    case ActionTypes.SUCCESS_SEARCH_USERNAME: {
      const {
        data: { userList },
      } = action;
      return userList;
    }
    case ActionTypes.FAILURE_SEARCH_USERNAME: {
      return [];
    }
    default:
      return state;
  }
}

export default combineReducers({ state, searchingUser, result });
