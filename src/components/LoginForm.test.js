import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('does not explode', () => {
    const component = renderer.create(
      <LoginForm
        user='COOL USER'
        password='COOL PASSWORD'
        userHandler={() => {}}
        passwordHandler={() => {}}
        updateMessage={() => {}}
        updateAuthorised={() => {}}
      />
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
