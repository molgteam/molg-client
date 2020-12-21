import {
  takeEvery, put, call, all, fork,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';

/**
 * @description 유저 피드를 확인하는 함수
 */
function* watchFetchUserFeed() {
  yield takeEvery(ActionTypes.FETCH_USER, function* ({ payload }) {
    yield put(actions.requestFetchUserFeed(payload.pk));
    try {
      const userInfoData = yield call(services.getFeeds, payload.pk);

      const nodes = refinery.refineNodes(userInfoData);
      const count = refinery.refineCount(userInfoData);
      const status = refinery.refineStatus(userInfoData);
      const pageInfo = refinery.refinePageInfo(userInfoData);
      yield put(
        actions.successFetchUserFeed({
          nodes,
          count,
          status,
          pageInfo,
        }),
      );
    } catch (error) {
      yield put(actions.failureFetchUserFeed('해당 유저는 찾을 수 없습니다.'));
    }
  });
}

/**
 * @description 유저 피드 더 불러오기
 */
function* watchFetchMoreFeeds() {
  yield takeEvery(ActionTypes.FETCH_MORE_FEEDS, function* ({ pk, endCursor }) {
    yield put(actions.requestFetchMoreFeeds());
    try {
      const userInfoData = yield call(services.getMoreFeeds, { pk, endCursor });

      const nodes = refinery.refineNodes(userInfoData);
      const count = refinery.refineCount(userInfoData);
      const status = refinery.refineStatus(userInfoData);
      const pageInfo = refinery.refinePageInfo(userInfoData);
      yield put(
        actions.successFetchMoreFeeds({
          nodes,
          count,
          status,
          pageInfo,
        }),
      );
    } catch (error) {
      yield put(
        actions.failureFetchMoreFeeds({
          error,
        }),
      );
    }
  });
}

export default function* feedListWatcher() {
  yield all([fork(watchFetchUserFeed), fork(watchFetchMoreFeeds)]);
}
