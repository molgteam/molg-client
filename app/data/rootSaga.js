import { fork, all } from 'redux-saga/effects';

import authTask from './auth/sagas';

export default function* rootSaga() {
  yield all([fork(authTask)]);
}
