import * as ActionTypes from '@app/data/rootAcionType';

export function initFetchUser(username) {
  return {
    type: ActionTypes.INIT_FETCH_USER,
    username,
  };
}

export function fetchUser({ pk, username }) {
  return {
    type: ActionTypes.FETCH_USER,
    pk,
    username,
  };
}

export function requestFetchUser(pk) {
  return {
    type: ActionTypes.REQUEST_FETCH_USER,
    pk,
  };
}

export function successFetchUser({ userInfo, hasStory }) {
  return {
    type: ActionTypes.SUCCESS_FETCH_USER,
    userInfo,
    hasStory,
  };
}
