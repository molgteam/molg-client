import * as ActionTypes from '@app/data/rootAcionType';

export function updateUser(user) {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: {user},
  };
}

export function requestSearchUser(user) {
  return {
    type: ActionTypes.SEARCH_USER_REQUEST,
    user,
  };
}

export function successSearchUser(data) {
  return {
    type: ActionTypes.SEARCH_USER_SUCCESS,
    payload: {...data},
  };
}

export function failureSearchUser(errorMessage) {
  return {
    type: ActionTypes.SEARCH_USER_FAILURE,
    payload: {errorMessage},
  };
}
