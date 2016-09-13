import React from 'react';
import renderer from 'react-test-renderer';
import Checkboxes from './Checkboxes';

describe('Checkboxes', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <Checkboxes
        name='COOL NAME'
        checkedOptions={['COOL OPTION']}
        changeHandler={() => {}}
        label='COOL LABEL'
        options={[
          'COOL OPTION',
          'UNCOOL OPTION',
        ]}
      />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
