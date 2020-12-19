import {
  all, call, fork, put, take, takeLatest, delay,
} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import * as services from '@app/data/rootService';
import * as refinery from '@app/data/rootRefinery';
import { ERROR_MESSAGE } from '@app/constants/STATUS';

function* watchUpdateUsername() {
  while (true) {
    const { username } = yield take(ActionTypes.UPDATE_USERNAME);
    yield put(actions.requestSearchUsername(username));
  }
}

function* watchFetchUsername() {
  yield takeLatest(ActionTypes.REQUEST_SEARCH_USERNAME, function* ({ username }) {
    yield delay(500);

    if (username) {
      try {
        const response = yield call(services.getResult, username);
        const refinedResponse = refinery.refineUserList(response);
        yield put(actions.successSearchUsername(refinedResponse));
      } catch {
        yield put(actions.failureSearchUsername(ERROR_MESSAGE.SEARCH));
      }
    } else {
      yield put(actions.successSearchUsername({ userList: [] }));
    }
  });
}

export default function* searchWatcher() {
  yield all([fork(watchUpdateUsername), fork(watchFetchUsername)]);
}
