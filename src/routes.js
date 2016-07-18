import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';
import CoursesPage from './components/course/courses';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="courses" component={ CoursesPage }/>
  </Route>
);
