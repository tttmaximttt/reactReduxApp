import React, {PropTypes} from 'react';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

const CourseForm = ({
  course,
  allAuthors,
  onSave,
  onChange,
  saving,
  errors
}) => {
  return(
    <form>
      <h1>Manage Course</h1>

      <TextInput
        name="title"
        label="Title"
        value={course.title}
        error={errors.title}
        onChange={onChange}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOptions='Select Author'
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        error={errors.category}
        onChange={onChange}
      />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        error={errors.length}
        onChange={onChange}
      />

      <input
        name="saveButton"
        type="submit"
        value={saving ? 'Saving...' : 'Save'}
        className='btn btn-primary'
        onClick={onSave}
        disabled={saving && 'disabled'}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
