import React from 'react';
import renderer from 'react-test-renderer';
import Knocked from './FlashMessage';

describe('FlashMessage', () => {
  it('displays message', () => {
    const component = renderer.create(<Knocked message='Hello World!'/>)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
