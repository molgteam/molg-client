import { combineReducers } from 'redux';
import { API } from '@app/constants/STATUS';
import * as ActionTypes from '@app/data/rootAcionType';

function status(state = API.INITIAL, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_USER: {
      return API.REQUEST;
    }
    case ActionTypes.SUCCESS_FETCH_USER: {
      return API.SUCCESS;
    }
    case ActionTypes.FAILURE_FETCH_USER: {
      return API.FAILURE;
    }
    default: {
      return state;
    }
  }
}

function isLoadingMoreFeeds(state = false, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_MORE_FEEDS:
      return true;
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS:
      return false;
    case ActionTypes.FAILURE_FETCH_MORE_FEEDS:
      return false;
    default:
      return state;
  }
}

const initialInfoState = {
  pk: null,
  hasStory: false,
};
function info(state = initialInfoState, action = {}) {
  switch (action.type) {
    case ActionTypes.FETCH_USER: {
      return { ...state, ...action.payload };
    }
    case ActionTypes.REQUEST_FETCH_USER: {
      const { pk } = action;
      return { ...state, pk };
    }
    case ActionTypes.SUCCESS_FETCH_USER: {
      const { hasStory } = action;
      return { ...state, hasStory };
    }
    default: {
      return state;
    }
  }
}

const initialFeedListState = {
  feedList: [],
  count: 0,
};
function feedInfo(state = initialFeedListState, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_USER: {
      return { feedList: [], count: 0 };
    }
    case ActionTypes.SUCCESS_FETCH_USER: {
      const { userInfo } = action;
      const { count, feedList } = userInfo;
      return { ...state, count, feedList };
    }
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS: {
      const { userInfo } = action;
      const { count, feedList } = userInfo;
      return { ...state, count, feedList: [...state.feedList, ...feedList] };
    }
    case ActionTypes.FAILURE_FETCH_USER: {
      return { ...state, feedList: [], count: 0 };
    }
    default: {
      return state;
    }
  }
}

const initialPageInfoState = {
  endCursor: null,
  hasNextPage: false,
};
function pageInfo(state = initialPageInfoState, action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH_USER: {
      return { endCursor: '', hasNextPage: false };
    }
    case ActionTypes.SUCCESS_FETCH_USER: {
      const { userInfo } = action;
      const {
        pageInfo: { endCursor, hasNextPage },
      } = userInfo;
      return { ...state, endCursor, hasNextPage };
    }
    case ActionTypes.SUCCESS_FETCH_MORE_FEEDS: {
      const { userInfo } = action;
      const {
        pageInfo: { endCursor, hasNextPage },
      } = userInfo;
      return { ...state, endCursor, hasNextPage };
    }
    case ActionTypes.FAILURE_FETCH_USER: {
      return { ...state, endCursor: '', hasNextPage: false };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  status,
  info,
  feedInfo,
  pageInfo,
  isLoadingMoreFeeds,
});
