import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = (courses) => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const updateCourseSuccess = (course) => {
  return { type: types.UPDATE_COURSES_SUCCESS, course };
};

export const createCourseSuccess = (course) => {
  return { type: types.CREATE_COURSES_SUCCESS, course };
};

export const loadCourses = () => {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
};

export const saveCourse = (course) => {
  console.log('from reducer', course)
  return function (dispatch, getState) {
    return courseApi.saveCourse(course)
      .then((savedCourse) => {
        console.log(savedCourse)
        course.id ? dispatch(updateCourseSuccess(savedCourse)) :
          dispatch(createCourseSuccess(savedCourse));
      }).catch((error) => {
        throw(error);
      });
  };
};
