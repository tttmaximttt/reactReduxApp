import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';
import CoursesPage from './components/course/courses';
import ManageCoursePage from './components/course/manageCourse';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="course" component={ ManageCoursePage }/>
    <Route path="course/:id" component={ ManageCoursePage }/>
    <Route path="courses" component={ CoursesPage }/>
  </Route>
);
