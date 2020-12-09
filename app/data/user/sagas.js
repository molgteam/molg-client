import {
  takeEvery, fork, all, call, put,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';

// TODO: feed 관련된 함수들은 feedList로 빼기

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

/**
 * @description 유저 피드랑 스토리 유무를 확인하는 함수
 */
function* watchFetchUser() {
  yield takeEvery(ActionTypes.FETCH_USER, function* ({ payload }) {
    yield put(actions.requestFetchUser(payload.pk));
    try {
      const [userInfoData, userStoryData] = yield all([
        call(services.getUserInfo, payload.pk),
        call(services.checkUserStory, payload.pk),
      ]);
      const refinedUserInfo = refinery.refineUserInfo(userInfoData);
      const hasStory = refinery.hasStory(userStoryData);
      yield put(actions.successFetchUser({ userInfo: refinedUserInfo, hasStory }));
    } catch (e) {
      console.log(e);
    }
  });
}

function* watchFetchMoreFeeds() {
  yield takeEvery(ActionTypes.FETCH_MORE_FEEDS, function* ({ pk, endCursor }) {
    yield put(actions.requestFetchMoreFeeds());
    try {
      const response = yield call(services.getMoreFeeds, { pk, endCursor });
      const userInfo = refinery.refineUserInfo(response);
      yield put(actions.successFetchMoreFeeds({ userInfo }));
    } catch (e) {
      console.log(e);
      yield put(actions.failureFetchMoreFeeds(e));
    }
  });
}

export default function* userWatcher() {
  yield all([fork(watchFetchUser), fork(watchInitFetchUser), fork(watchFetchMoreFeeds)]);
}
