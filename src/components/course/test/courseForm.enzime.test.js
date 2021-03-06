import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../courseForm';

function setup(status = false) {
  let props = {
    course: {},
    saving: status,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm2', () => {

  it('render form and h1' , () => {
    const wrapper = setup();

    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is label "Save" when not saving' , () => {
    const wrapper = setup();

    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is label "Saving..." when saving' , () => {
    const wrapper = setup(true);

    expect(wrapper.find('input').props().value).toBe('Saving...');
  });

});
