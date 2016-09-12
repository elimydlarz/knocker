jest.mock('../services/transmit');

import React from 'react';
import renderer from 'react-test-renderer';
import Knocked from './Knocked';

describe('Knocked', () => {
  it('when any field is empty', () => {
    const component = renderer.create(<Knocked />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when the form is submitted successfully', () => {
    const component = renderer.create(<Knocked />)
    let tree = component.toJSON();

    setField(tree, 'address').props.onChange({ target: { id: 'address', value: '23 Something Street, Somewhere' } });
    setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: 'Fun visit! Sold the guy some bananas.' } });
    setField(tree, 'knocker').props.onChange({ target: { id: 'knocker', value: 'Rick Sanchez' } });
    submit(tree);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when form is submitted UNSUCCESSFULLY', () => {
    const component = renderer.create(<Knocked />)
    let tree = component.toJSON();

    setField(tree, 'address').props.onChange({ target: { id: 'address', value: 'FAIL' } });
    setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: 'FAIL' } });
    setField(tree, 'knocker').props.onChange({ target: { id: 'knocker', value: 'FAIL' } });
    submit(tree);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

function setField(tree, name) {
  const form = findForm(tree);
  const label = findLabel(form, name);
  return findField(label, name);
}

function findForm(parent) {
  return parent.children.find(child => child.type === 'form');
}

function findLabel(parent, name) {
  return parent.children.find(child => child.type === 'label' && child.props['data-name'] === `${name}-label`);
}

function findField(parent, name) {
  return parent.children.find(child => child.props && child.props.id === name);
}

function submit(parent) {
  findForm(parent)
    .children.find(child => child.type === 'input')
    .props.onClick({ preventDefault() {} });
}
