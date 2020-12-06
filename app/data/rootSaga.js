import {fork, all} from 'redux-saga/effects';

import searchTask from './search/sagas';

export default function* rootSaga() {
  yield all([fork(searchTask)]);
}
