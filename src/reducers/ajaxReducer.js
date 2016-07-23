import * as types from '../actions/actionTypes';
import initialState from './initilaState';

const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === '_SUCCESS';
};

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {

  if (action.type == types.BEGIN_AJAX_CALL) {
    return ++state;
  } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return --state;
  }

  return state;
}
