import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxCallsInProgress from './ajaxReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  numAjaxCallsInProgress
});

export default rootReducer;
