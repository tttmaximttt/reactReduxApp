import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../courseForm';

function setup(status) {
  let props = {
    course: {},
    saving: status,
    errors: {},
    onSave: () => {

    },
    onChange: () => {

    }
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output
  };
}

describe('CourseForm', () => {

  it('render form and h1' , () => {
    const {output} = setup();
    let [ h1 ] = output.props.children;

    expect(output.type).toBe('form');
    expect(h1.type).toBe('h1');
  });

  it('save button is label "Save" when not saving' , () => {
    const {output} = setup(false);
    let submitButton = output.props.children.find(item => item.props.name === 'saveButton');

    expect(output.type).toBe('form');
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is label "Saving..." when saving' , () => {
    const {output} = setup(true);
    let submitButton = output.props.children.find(item => item.props.name === 'saveButton');

    expect(output.type).toBe('form');
    expect(submitButton.props.value).toBe('Saving...');
  });

});
