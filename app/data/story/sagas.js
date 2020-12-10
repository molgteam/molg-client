import {
  takeEvery, call, put, fork, all,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';

function watchFetchHasStory() {
  takeEvery(ActionTypes.FETCH_USER, function* ({ payload }) {
    yield put(actions.requestHasStory());
    try {
      const storyData = yield call(services.checkUserStory, payload.pk);
      console.log(storyData);
    } catch (e) {
      console.log(e);
    }
  });
}

// function* watchFetchUser() {
//   yield takeEvery(ActionTypes.FETCH_USER, function* ({ payload }) {
//     yield put(actions.requestFetchUser(payload.pk));
//     try {
//       const [userInfoData, userStoryData] = yield all([
//         call(services.getUserInfo, payload.pk),
//         call(services.checkUserStory, payload.pk),
//       ]);
//       const refinedUserInfo = refinery.refineUserInfo(userInfoData);
//       const hasStory = refinery.hasStory(userStoryData);
//       yield put(actions.successFetchUser({ userInfo: refinedUserInfo, hasStory }));
//     } catch (e) {
//       console.log(e);
//     }
//   });
// }

export default function* storyWatcher() {
  yield all([fork(watchFetchHasStory)]);
}
