import { combineReducers } from 'redux';
import * as ActionTypes from '@app/data/rootAcionType';

const initialInfoState = {
  fullName: null,
  hasAnonymousProfilePicture: false,
  index: null,
  isPrivate: false,
  isVerified: false,
  pk: null,
  profilePicId: null,
  profilePicUrl: null,
  username: null,
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

export default combineReducers({
  info,
});
