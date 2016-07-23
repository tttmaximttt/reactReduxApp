import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export const loadAuthorsSuccess = (authors) => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return function (dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
};
