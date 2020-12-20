import * as ActionTypes from '@app/data/rootAcionType';

export function fetchUserPk(username) {
  return {
    type: ActionTypes.FETCH_USER_PK,
    username,
  };
}

export function storeUserInfo(user) {
  return {
    type: ActionTypes.STORE_USER_INFO,
    user,
  };
}
