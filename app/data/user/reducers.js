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
    case ActionTypes.STORE_USER_INFO: {
      return { ...state, ...action.user };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  info,
});
