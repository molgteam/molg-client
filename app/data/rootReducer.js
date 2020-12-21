import { combineReducers } from 'redux';
import search from './search/reducers';
import user from './user/reducers';
import feed from './feed/reducers';
import story from './story/reducers';
import sidebar from './sidebar/reducers';
import navigation from './navigation/reducers';

export default combineReducers({
  search,
  user,
  feed,
  story,
  sidebar,
  navigation,
});
