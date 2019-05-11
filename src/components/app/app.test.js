import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

it(`App renders correctly`, () => {
  const {questions} = mock;
  const tree = renderer
    .create(<App
      errorCount={0}
      gameTime={0}
      questions={questions}
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
