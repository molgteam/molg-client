import { API } from '@app/constants/STATUS';
import * as ActionTypes from '@app/data/rootAcionType';
import { combineReducers } from 'redux';

const initialState = {
  status: API.INITIAL,
  moreFeedStatus: API.INITIAL,
  error: {},
};
function state(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_USER_FEED: {
      return { ...state, status: API.REQUEST };
    }
    case ActionTypes.SUCCESS_FETCH_USER_FEED: {
      const { status } = action;
      return { ...state, status };
    }
    case ActionTypes.FAILURE_FETCH_USER_FEED: {
      const { error } = action;
      return { ...state, status: API.FAILURE, error };
    }
    case ActionTypes.REQUEST_FETCH_MORE_FEEDS: {
      return { ...state, moreFeedStatus: API.REQUEST };
    }
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS: {
      const { status } = action;
      return { ...state, moreFeedStatus: status };
    }
    case ActionTypes.FAILURE_FETCH_MORE_FEEDS: {
      const { error } = action;
      return { ...state, moreFeedStatus: API.FAILURE, error };
    }
    default: {
      return state;
    }
  }
}

function nodes(state = [], action = {}) {
  switch (action.type) {
    case ActionTypes.SUCCESS_FETCH_USER_FEED: {
      return [...action.nodes];
    }
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS: {
      return [...state, ...action.nodes];
    }
    default: {
      return state;
    }
  }
}

function pageInfo(state = { endCursor: null, hasNextPage: false }, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_USER_FEED: {
      return { endCursor: '', hasNextPage: false };
    }
    case ActionTypes.SUCCESS_FETCH_USER_FEED: {
      const {
        pageInfo: { endCursor, hasNextPage },
      } = action;
      return { ...state, endCursor, hasNextPage };
    }
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS: {
      const {
        pageInfo: { endCursor, hasNextPage },
      } = action;
      return { ...state, endCursor, hasNextPage };
    }
    case ActionTypes.FAILURE_FETCH_USER_FEED: {
      return { ...state, endCursor: '', hasNextPage: false };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  state,
  nodes,
  pageInfo,
});
