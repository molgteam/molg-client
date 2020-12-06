import {combineReducers} from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

function searchingUser(state = '', action = {}) {
  switch (action.type) {
    case ActionTypes.UPDATE_USER: {
      return action.payload.user;
    }
    case ActionTypes.RESET_USER: {
      return '';
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

function userInfo(state = initialUserList, action = {}) {
  switch (action.type) {
    case ActionTypes.SEARCH_USER_REQUEST: {
      return {...state, isLoading: true};
    }
    case ActionTypes.SEARCH_USER_SUCCESS: {
      const {
        payload: {userList},
      } = action;
      return {...state, isLoading: false, userList};
    }
    case ActionTypes.SEARCH_USER_FAILURE: {
      const {
        payload: {errorMessage},
      } = action;
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

export default combineReducers({searchingUser, userInfo});
