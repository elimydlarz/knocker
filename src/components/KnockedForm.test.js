import React from 'react';
import renderer from 'react-test-renderer';
import KnockedForm from './KnockedForm';

describe('KnockedForm', () => {
  it('does not explode', () => {
    const component = renderer.create(<KnockedForm />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
