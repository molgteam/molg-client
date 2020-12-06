import {all, call, fork, put, take, takeLatest, delay} from 'redux-saga/effects';
import * as ActionTypes from '@app/data/rootAcionType';
import * as actions from '@app/data/rootAction';
import {getUser} from './service';
import refinery from './refinery';

function* watchUpdateUser() {
  while (true) {
    const {payload} = yield take(ActionTypes.UPDATE_USER);
    yield put(actions.requestSearchUser(payload.user));
  }
}

function* watchFetchUser() {
  yield takeLatest(ActionTypes.SEARCH_USER_REQUEST, function* ({user}) {
    yield delay(500);

    if (user) {
      try {
        const response = yield call(getUser, user);
        const refinedResponse = refinery(response);
        yield put(actions.successSearchUser(refinedResponse));
      } catch (err) {
        console.log(err);
        yield put(actions.failureSearchUser('요청에 실패했습니다.'));
      }
    } else {
      yield put(actions.successSearchUser({userList: []}));
    }
  });
}

export default function* searchWatcher() {
  yield all([fork(watchUpdateUser), fork(watchFetchUser)]);
}
