jest.mock('../services/transmit');

import React from 'react';
import renderer from 'react-test-renderer';
import Knocked from './Knocked';

describe('Knocked', () => {
  describe('when address is empty', () => {
    it('disables submit', () => {
      const component = renderer.create(<Knocked />)
      let tree = component.toJSON();

      setField(tree, 'address').props.onChange({ target: { id: 'address', value: '' } });
      setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: 'COOL NOTES' } });
      submit(tree);

      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when notes is empty', () => {
    it('disables submit', () => {
      const component = renderer.create(<Knocked />)
      let tree = component.toJSON();

      setField(tree, 'address').props.onChange({ target: { id: 'address', value: 'COOL ADDRESS' } });
      setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: '' } });
      submit(tree);

      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when the form is submitted successfully', () => {
    it('displays a confirmation message', () => {
      const component = renderer.create(<Knocked />)
      let tree = component.toJSON();

      setField(tree, 'address').props.onChange({ target: { id: 'address', value: 'COOL ADDRESS' } });
      setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: 'COOL NOTES' } });
      submit(tree);

      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when form is submitted UNSUCCESSFULLY', () => {
    it('displays an error message', () => {
      const component = renderer.create(<Knocked />)
      let tree = component.toJSON();

      setField(tree, 'address').props.onChange({ target: { id: 'address', value: 'COOL ADDRESS' } });
      setField(tree, 'notes').props.onChange({ target: { id: 'notes', value: 'FAIL' } });
      submit(tree);

      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
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
