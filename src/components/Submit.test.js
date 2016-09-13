import React from 'react';
import renderer from 'react-test-renderer';
import Submit from './Submit';

describe('Submit', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <Submit
        user='COOL USER'
        password='COOL PASSWORD'
        eventType='COOL EVENT TYPE'
        data={{ coolKey: 'COOL VALUE' }}
        requiredFields={[
          'COOL REQUIRED FIELD'
        ]}
        successFn={() => {}}
        failureFn={() => {}}
      />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
