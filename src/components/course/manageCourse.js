import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import toastr from 'toastr';

export class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
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

  redirect(){
    this.setState({saving: false});
    toastr.success('Course saved!');
    this.context.router.push('/courses');
  }

  courseFormValid(){
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  saveCourse(event){
    event.preventDefault();

    if (!this.courseFormValid()){
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
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
          saving={this.state.saving}
        />
      </div>
		);
	}
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequire,
  actions: PropTypes.array.isRequire,
  authors: PropTypes.array.isRequire
};

ManageCoursePage.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
