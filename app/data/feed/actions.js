import * as ActionTypes from '@app/data/rootAcionType';

export function requestFetchUserFeed() {
  return {
    type: ActionTypes.REQUEST_FETCH_USER_FEED,
  };
}

export function successFetchUserFeed(feedInfo) {
  return {
    type: ActionTypes.SUCCESS_FETCH_USER_FEED,
    ...feedInfo,
  };
}

export function failureFetchUserFeed(error) {
  return {
    type: ActionTypes.FAILURE_FETCH_USER_FEED,
    error,
  };
}

export function requestFetchMoreFeeds() {
  return {
    type: ActionTypes.REQUEST_FETCH_MORE_FEEDS,
  };
}

export function successFetchMoreFeeds(feedInfo) {
  return {
    type: ActionTypes.SUCCESS_FETCH_MORE_FEEDS,
    ...feedInfo,
  };
}

export function failureFetchMoreFeeds(error) {
  return {
    type: ActionTypes.FAILURE_FETCH_MORE_FEEDS,
    error,
  };
}
