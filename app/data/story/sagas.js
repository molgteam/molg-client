import {
  takeEvery, call, put, fork, all,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';

function* watchFetchHasStory() {
  yield takeEvery(ActionTypes.FETCH_USER, function* ({ payload }) {
    yield put(actions.requestHasStory());
    try {
      const storyData = yield call(services.checkUserStory, payload.pk);
      const hasStory = refinery.hasStory(storyData);
      yield put(actions.successHasStory({ hasStory }));
    } catch (error) {
      yield put(actions.failureHasStory({ error }));
    }
  });
}

export default function* storyWatcher() {
  yield all([fork(watchFetchHasStory)]);
}
