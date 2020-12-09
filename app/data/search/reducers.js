import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

function searchingUser(state = '', action = {}) {
  switch (action.type) {
    case ActionTypes.UPDATE_USERNAME: {
      return action.username;
    }
    case ActionTypes.RESET_USERNAME: {
      return '';
    }
    case ActionTypes.FETCH_USER: {
      return action.payload.username;
    }
    default:
      return state;
  }
}

const initialUserList = {
  isLoading: false,
  userList: [],
  errorMessage: '',
};

function result(state = initialUserList, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_SEARCH_USERNAME: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.SUCCESS_SEARCH_USERNAME: {
      const {
        data: { userList },
      } = action;
      return { ...state, isLoading: false, userList };
    }
    case ActionTypes.FAILURE_SEARCH_USERNAME: {
      const { errorMessage } = action;
      return {
        ...state,
        isLoading: false,
        userList: [],
        errorMessage,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({ searchingUser, result });
