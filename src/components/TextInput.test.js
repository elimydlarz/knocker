import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <TextInput
        name='COOL NAME'
        label='COOL FIELD'
        value='COOL VALUE'
        changeHandler={() => {}} />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
