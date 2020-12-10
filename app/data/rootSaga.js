import { fork, all } from 'redux-saga/effects';

import searchTask from './search/sagas';
import userTask from './user/sagas';
import feedTask from './feed/sagas';
import storyTask from './story/sagas';

export default function* rootSaga() {
  yield all([fork(searchTask), fork(userTask), fork(feedTask), fork(storyTask)]);
}
