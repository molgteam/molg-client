import { fork, all } from 'redux-saga/effects';

import searchTask from './search/sagas';
import userTask from './user/sagas';

export default function* rootSaga() {
  yield all([fork(searchTask), fork(userTask)]);
}
