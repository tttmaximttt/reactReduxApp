import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';

class courseManagePage extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.course.id !== nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

	render() {
		return (
      <div>
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          errors={this.state.errors}
        />
      </div>
		);
	}
}

courseManagePage.propTypes = {
  course: PropTypes.object.isRequire,
  actions: PropTypes.array.isRequire,
  authors: PropTypes.array.isRequire
};

courseManagePage.contextTypes = {
  router: PropTypes.object
};

const getCourseBid = (courses, id) => {
  const course = courses.filter(item => item.id === id);

  if (course.length > 0) return course[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id;

	let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseBid(state.courses, courseId);
  }

  const authorsFormatedForDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
		course,
		authors: authorsFormatedForDropDown
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(courseManagePage);
