import {
  takeEvery, fork, all, call, put,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';

/**
 * @description url로 바로 입력하고 왔을 때 사용하는 함수
 */
function* watchInitFetchUser() {
  yield takeEvery(ActionTypes.INIT_FETCH_USER, function* ({ username }) {
    try {
      const response = yield call(services.getResult, username);
      const { userList } = refinery.refineUserList(response);
      const userInfo = userList.find((u) => u.username === username);
      yield put(actions.fetchUser({ username, ...userInfo }));
    } catch (e) {
      console.log(e);
    }
  });
}

export default function* userWatcher() {
  yield all([fork(watchInitFetchUser)]);
}
