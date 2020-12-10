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

export function fetchMoreFeeds({ pk, endCursor }) {
  return {
    type: ActionTypes.FETCH_MORE_FEEDS,
    endCursor,
    pk,
  };
}
