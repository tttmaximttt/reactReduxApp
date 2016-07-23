import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from '../manageCourse';

describe('Manage Course Page', () => {
  it('set error message when try save empty message', () => {
    const props = {
      authors:[],
      actions:{
        saveCourse: () => {return Promise.resolve()}
      },
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      }
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const submitButton = wrapper.find('input').last();
    expect(submitButton.prop('type')).toBe('submit');
    submitButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
