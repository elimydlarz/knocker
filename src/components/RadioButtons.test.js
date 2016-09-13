import React from 'react';
import renderer from 'react-test-renderer';
import RadioButtons from './RadioButtons';

describe('RadioButtons', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <RadioButtons
        label='COOL RADIO GROUP'
        name='COOL KEY'
        value='SELECTED OPTION'
        changeHandler={() => {}}
        options={[
          'SELECTED OPTION',
          'OTHER OPTION',
        ]} />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
