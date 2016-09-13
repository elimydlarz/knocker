import React from 'react';
import renderer from 'react-test-renderer';
import DropDown from './DropDown';

describe('DropDown', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <DropDown
        name='COOL NAME' 
        value='UNCOOL VALUE'
        changeHandler={() => {}}
        label='COOL LABEL'
        options={[
          'COOL VALUE',
          'UNCOOL VALUE',
        ]}
      />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
