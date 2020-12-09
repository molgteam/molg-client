import * as ActionTypes from '@app/data/rootAcionType';

export function initFetchUser(username) {
  return {
    type: ActionTypes.INIT_FETCH_USER,
    username,
  };
}

export function fetchUser({ username, pk, ...rest }) {
  return {
    type: ActionTypes.FETCH_USER,
    payload: {
      username,
      pk,
      ...rest,
    },
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

export function fetchMoreFeeds({ pk, endCursor }) {
  return {
    type: ActionTypes.FETCH_MORE_FEEDS,
    pk,
    endCursor,
  };
}

export function requestFetchMoreFeeds() {
  return {
    type: ActionTypes.REQUEST_FETCH_MORE_FEEDS,
  };
}

export function successFetchMoreFeeds({ userInfo }) {
  return {
    type: ActionTypes.SUCCESS_FETCH_MORE_FEEDS,
    userInfo,
  };
}

export function failureFetchMoreFeeds() {
  return {
    type: ActionTypes.FAILURE_FETCH_MORE_FEEDS,
  };
}
