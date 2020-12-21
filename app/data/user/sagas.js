import {
  takeEvery, fork, all, call, put,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';

/**
 * @description user PK를 구한 뒤에 피드 정보를 가지고 온다.
 */
function* watchFetchUserPk() {
  yield takeEvery(ActionTypes.FETCH_USER_PK, function* ({ username }) {
    try {
      const response = yield call(services.getResult, username);
      const { userList } = refinery.refineUserList(response);
      const userInfo = userList.find((u) => u.username === username);

      if (userInfo) {
        yield put(actions.storeUserInfo({ ...userInfo, username }));
        yield put(actions.fetchUser({ pk: userInfo.pk }));
      } else {
        yield put(actions.failureFetchUserFeed('해당 유저는 찾을 수 없습니다.'));
      }
    } catch (e) {
      console.log(e);
    }
  });
}

export default function* userWatcher() {
  yield all([fork(watchFetchUserPk)]);
}
