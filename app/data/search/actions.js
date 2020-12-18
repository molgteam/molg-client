import * as ActionTypes from '@app/data/rootAcionType';

export function updateUsername(username) {
  return {
    type: ActionTypes.UPDATE_USERNAME,
    username,
  };
}

export function requestSearchUsername(username) {
  return {
    type: ActionTypes.REQUEST_SEARCH_USERNAME,
    username,
  };
}

export function successSearchUsername(data) {
  return {
    type: ActionTypes.SUCCESS_SEARCH_USERNAME,
    data,
  };
}

export function failureSearchUsername(error) {
  return {
    type: ActionTypes.FAILURE_SEARCH_USERNAME,
    error,
  };
}
