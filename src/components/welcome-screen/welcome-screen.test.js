import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      mistakes = {0}
      minutes = {0}
      onClick = {jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
