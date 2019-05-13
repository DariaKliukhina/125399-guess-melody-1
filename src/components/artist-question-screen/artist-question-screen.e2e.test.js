import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from "./artist-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  onAnswer: jest.fn(),
  question: {
    type: `artist`,
    genre: `rock`,
    answers: [
      {
        artist: `name`,
        picture: `path`,
      },
    ],
    song: {
      artist: `name`,
      src: `path`,
    },
  },
};

it(`When user answers artist question form is not sent`, () => {
  const {question, onAnswer} = mock;
  const artistQuestion = mount(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const form = artistQuestion.find(`form`);
  const input = form.find(`input`).at(0);

  form.simulate(`change`, {
    target: input,
  });

  expect(mock.onAnswer).toHaveBeenCalledTimes(1);
});
