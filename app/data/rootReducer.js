import { combineReducers } from 'redux';
import search from './search/reducers';
import user from './user/reducers';

export default combineReducers({ search, user });
